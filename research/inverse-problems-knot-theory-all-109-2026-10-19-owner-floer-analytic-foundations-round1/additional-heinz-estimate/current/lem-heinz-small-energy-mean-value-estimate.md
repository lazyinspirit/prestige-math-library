---
id: lem-heinz-small-energy-mean-value-estimate
kind: lemma
title: "A Heinz mean value estimate from small scalar energy"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, lem-classical-subharmonic-mean-value-inequalities]
dependency_level: 0
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dusa McDuff and Dietmar Salamon, J-holomorphic Curves and Symplectic Topology, §4.3, mean value inequality"
      url: "https://bookstore.ams.org/coll-52"
---

## Statement

Assume Countable Choice. Let $e$ be a nonnegative $C^2$ real function on a neighborhood of the closed disk $\overline B_r(0)\subset\mathbb R^2$, where $r>0$. Let $a,b\ge0$ and suppose
$$\Delta e\ge-ae^2-be,\qquad br^2\le1,\qquad a\int_{B_r(0)}e<\frac{3\pi}{64}.$$
Then
$$e(0)\le\frac{16}{3\pi r^2}\int_{B_r(0)}e.$$
The small-energy condition is automatic when $a=0$. Translation gives the identical assertion for a disk centered at any point. This is a scalar differential-inequality estimate; identifying its hypotheses for a holomorphic-map energy density is a separate step.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Countable Choice, the nonnegative function $e$, disk, constants, and inequalities in the statement. Write $E=\int_{B_r(0)}e$.

[F1] A $C^2$ function with nonnegative Laplacian satisfies the ball mean-value inequality, by [[lem-classical-subharmonic-mean-value-inequalities]].

## Proof

1.1 If $e(0)=0$, the result follows from $E\ge0$. Otherwise the continuous function $(r-|z|)^2e(z)$ attains a positive maximum at some point $z_0$ with $|z_0|<r$, since it vanishes on the boundary. Set $M=e(z_0)>0$ and $d=(r-|z_0|)/2>0$. For $|z-z_0|\le d$, the inequalities $r-|z|\ge d$ and maximality give $e(z)\le4M$. At the original center maximality also gives $r^2e(0)\le4d^2M$. The closed disk $\overline B_d(z_0)$ lies in the original open disk. [given, construct, algebra]

2.1 On this smaller disk $\Delta e\ge-16aM^2-4bM$. Put $K=16aM^2+4bM$. The function $e(z)+K|z-z_0|^2/4$ has nonnegative Laplacian. Applying [F1] to a radius $0<\rho\le d$ and using the disk average of $|z-z_0|^2$, which is $\rho^2/2$, gives $$M\le\frac{1}{\pi\rho^2}\int_{B_\rho(z_0)}e+\frac{K\rho^2}{8}=\frac{1}{\pi\rho^2}\int_{B_\rho(z_0)}e+M(2aM+b/2)\rho^2.$$ Write $q=8aM+2b$, so the last term is $Mq\rho^2/4$. [F1, step 1.1, algebra]

3.1 If $qd^2\le1$, including $q=0$, choose $\rho=d$ in step 2.1. It gives $3M/4\le E/(\pi d^2)$, hence $Md^2\le4E/(3\pi)$. The center comparison from step 1.1 then proves $e(0)\le16E/(3\pi r^2)$. [step 1.1, step 2.1, cases, algebra]

4.1 It remains to exclude $qd^2>1$. Since $d\le r/2$ and $br^2\le1$, we have $bd^2\le1/4$. Thus $8aMd^2>1-2bd^2\ge1/2$, so $a>0$ and $M>1/(16ad^2)$. Consequently $b/M\le16abd^2\le4a$, and $q/M=8a+2b/M\le16a$. Choose $\rho=q^{-1/2}<d$ in step 2.1. It yields $$E\ge\int_{B_\rho(z_0)}e\ge\frac{3\pi M}{4q}\ge\frac{3\pi}{64a},$$ contradicting the assumed strict inequality $aE<3\pi/64$. Therefore the case of step 3.1 always holds. The zero-center case in step 1.1 and the same calculation after translation prove every asserted clause. [step 1.1, step 2.1, step 3.1, given, cases, algebra] ∎
