---
id: thm-finite-seminorm-bound-characterizes-tempered-distributions
kind: theorem
title: Finite seminorm bound characterizes tempered distributions
status: published
origin: pipeline
deps: [def-tempered-distribution]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
      url: "https://web.archive.org/web/20250519141924if_/https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      locator: "Remark 11.20 and equations (11.5), (11.28), pp. 120, 126"
proof_strategy: direct
---

## Statement

Let $u:\mathcal S(\mathbb R^n)\to\mathbb C$ be complex-linear.  Then $u$ is
tempered if and only if there are $C\geq0$ and integers $N,M\geq0$ such that

$$|\langle u,\varphi\rangle| \leq C\max_{|\alpha|\leq N,\ |\beta|\leq M} \sup_{x\in\mathbb R^n}|x^\alpha\partial^\beta\varphi(x)|$$

for every $\varphi\in\mathcal S(\mathbb R^n)$.

## Facts & Assumptions

**Given:** A complex-linear functional $u$ on $\mathcal S(\mathbb R^n)$.

[F1] A basic zero-neighborhood in Schwartz space imposes finitely many strict bounds on its defining seminorms ([[def-tempered-distribution]]).

## Proof

**Proof technique:** direct continuity estimate.

1.1 Suppose $u$ is continuous.  There is a basic zero-neighborhood $U=\{\varphi:p_{\alpha_j\beta_j}(\varphi)<\varepsilon_j, 1\leq j\leq r\}$ on which $|u(\varphi)|<1$.  If $r=0$, then $U=\mathcal S$ and linearity forces $u=0$, so take $C=0$.  Otherwise put $Q(\varphi)=\max_j p_{\alpha_j\beta_j}(\varphi)/\varepsilon_j$. [F1]

2.1 If $Q(\varphi)>0$, then $\varphi/(2Q(\varphi))\in U$, whence $|u(\varphi)|<2Q(\varphi)$.  If $Q(\varphi)=0$, every scalar multiple of $\varphi$ lies in $U$; boundedness of those scalar multiples of $u(\varphi)$ forces $u(\varphi)=0$.  Choose $N$ and $M$ dominating the finitely many $|\alpha_j|$ and $|\beta_j|$.  Then $Q(\varphi)$ is at most $\max_j\varepsilon_j^{-1}$ times the rectangular maximum in the statement, which proves the required estimate. [F1, step 1.1]

3.1 Conversely, assume the displayed estimate.  For every $\varepsilon>0$, the set on which its finite maximum is less than $\varepsilon/(C+1)$ is a zero-neighborhood and is carried by $u$ into the disk of radius $\varepsilon$.  Thus $u$ is continuous and hence tempered. [F1, given] ∎
