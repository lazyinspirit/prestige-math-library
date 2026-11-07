---
id: thm-artin-schreier-differential-residue-formula
kind: theorem
title: Artin–Schreier pairing is a differential residue
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 14
deps:
- def-local-artin-schreier-pairing
- def-local-artin-reciprocity-map
- def-continuous-cohomology-of-a-profinite-group-with-discrete-module
- thm-local-artin-reciprocity-and-norm-index
- thm-field-norm-and-trace-by-embeddings
- lem-hensel-factor-lifting-over-a-complete-valued-field
- def-axiom-of-choice
- def-dependent-choice
justified_by: []
proof_strategy: direct
axiom_use: Original AC AND DC scope retained for existence of canonical reciprocity and the
  norm-kernel conclusion. The identity itself is proved from literally supplied canonical character/invariant/unramified
  data by finite cochains and formal series; it asserts no choice-free existence.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, second edition,
      Chapter IV §§5.4–5.6
    url: https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf
    locator: Chapter IV (5.4)–(5.7), printed146–151, complete actual proofs read; integral change-of-parameter
      and finite-cochain norm-vanishing details supplied locally.
verification: {}
---

## Statement

Assume AC and DC. Let $F=k((\pi))$ be a complete discretely valued
field of characteristic $p>0$ with finite residue field $k$. For
$a\in F^\times$ and $b\in F$, write
$a=\sum_i a_i\pi^i$, define
$da/d\pi=\sum_i ia_i\pi^{i-1}$, and let $\operatorname{res}_\pi$ be the
coefficient of $\pi^{-1}$. Then the Artin–Schreier pairing satisfies
$$[a,b]_F=\operatorname{Tr}_{k/\mathbb F_p} \operatorname{res}_\pi\!\left(b\,a^{-1}\frac{da}{d\pi}\right).$$
It is multiplicative in $a$ and additive in $b$, is independent of the
chosen uniformizer, and $[a,b]_F=0$ exactly when $a$ is a norm from the
extension defined by $X^p-X=b$.

## Statement references

[[def-local-artin-schreier-pairing]]

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[thm-local-artin-reciprocity-and-norm-index]]

[[def-local-artin-reciprocity-map]]

[[lem-hensel-factor-lifting-over-a-complete-valued-field]]

[[def-dependent-choice]]

[[def-axiom-of-choice]]

[Fesenko and Vostokov, *Local Fields and Their Extensions*, Chapter IV §§5.4–5.6, printed pp. 147–150](https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf)

## Facts & Assumptions

**Given:** The original AC/DC, Laurent field, and pairing. The canonical
map and normalized invariant have the precise finite-character property
of the Definition, together with its arithmetic unramified normalization.

[F1] For a supplied canonical map, $P(a,b)=\operatorname{rec}_F(a)(\gamma)-\gamma$
for $\gamma^p-\gamma=b$; roots differ by $\mathbb F_p$.
[[def-local-artin-schreier-pairing]]

[F2] The distinguished map is a homomorphism, compatible on finite
abelian quotients, with
$\chi(\operatorname{rec}_F(a))=\operatorname{inv}_F(a\smile\delta\chi)$.
A uniformizer acts by arithmetic Frobenius on finite unramified extensions.
These are properties of the literally supplied canonical data, not a
choice-free existence inference. [[def-local-artin-reciprocity-map]]

[F3] Under AC and DC the canonical finite Artin map has the norm kernel
for every finite abelian extension. [[thm-local-artin-reciprocity-and-norm-index]]

[F4] Continuous inhomogeneous cochains have their explicit differential;
a cochain on a finite Galois quotient inflates by composition.
[[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

[F5] Norms of finite separable extensions are products over embeddings.
[[thm-field-norm-and-trace-by-embeddings]]

[F6] The full factor Hensel theorem includes unique simple-root lifting.
[[lem-hensel-factor-lifting-over-a-complete-valued-field]]

[A1] AC and DC are the original hypotheses for the existence/norm branch.
[[def-axiom-of-choice]] [[def-dependent-choice]]

## Proof

**Proof technique:** compute on every uniformizer, prove parameter change
integrally, and separate the finite supplied-data identity from norm existence.

**Given:** The data above; $P$ denotes [F1].

1.1 The polynomial $X^p-X-b$ has derivative $-1$ and all its roots are $\gamma+c$, $c\in\mathbb F_p$. Thus $E=F(\gamma)$ is finite Galois; its group injects into $(\mathbb F_p,+)$ by displacement, so is trivial or cyclic of order $p$. The pairing is additive in $b$ by applying the same compatible automorphism to sums of roots in their finite compositum, and multiplicative in $a$ because displacements are fixed scalars. Hence $P(a^p,b)=0$ and $P(a,\wp(c))=0$ for $\wp(c)=c^p-c$. [F1, F2, given, algebra]

2.1 We need norm vanishing for one explicit finite cyclic norm and prove it directly, so the identity branch does not silently use an AC existence theorem. For a cyclic extension $E/F=\langle\sigma\rangle$ of order $m$, a supplied $u\in E^\times$, and $a=N_{E/F}u$, put $b_i=\prod_{j=0}^{i-1}\sigma^j u$, $0\le i<m$, with $b_0=1$. For the character $\chi(\sigma^i)=i/m+\mathbb Z$ the finite cochain has $$b_i\sigma^i(b_j)b_{i+j\bmod m}^{-1} =a^{\lfloor(i+j)/m\rfloor}.$$ The right side is exactly $a\smile\delta\chi$, using the rational lift $i/m$. Inflate this finite cochain to $G_F$; it is continuous, so [F4] and [F2] give $\chi(\operatorname{rec}_F(a))=0$. No comparison theorem or family of lift choices is involved. Apply this to a nonsplit AS field, with the uniquely specified generator $\sigma\gamma=\gamma+1$. By [F5], $N(\gamma)=\prod_{c\in\mathbb F_p}(\gamma+c)=b$ and $N(-\gamma)=-b$, also for $p=2$. Thus $P(-b,b)=0$ for $b\ne0$. For a split field it is already zero by step 1.1. The degree-one cyclic case has $\chi=0$ and the same conclusion directly. [F1, F2, F4, F5, step 1.1, construct, algebra]

3.1 Let $s$ be ANY uniformizer. Its coefficient field is the original finite $k$: those constants are precisely the roots of $X^q-X$ in $F$, and the unique coefficient recursion expands every element in $s$. For $\theta\in k$, a root $\gamma^p-\gamma=\theta$ generates a constant extension of degree one or $p$, with the corresponding unramified Laurent extension. A finite $k$-basis of the constants is an $F$-basis of that extension by coefficient comparison. Arithmetic $q$-Frobenius gives $$P(s,\theta)=\gamma^q-\gamma =\sum_{h=0}^{f-1}\theta^{p^h}=\operatorname{Tr}_{k/\mathbb F_p}\theta, \qquad q=p^f.$$ This includes split $\theta$. For $\theta\ne0$ and a nonzero integer $j$ prime to $p$, the elements $\theta,-1$ are $p$th powers in $k$. Step 2.1 and bilinearity therefore give $0=P(-\theta s^j,\theta s^j)=jP(s,\theta s^j)$, so that last value is zero. For $p\mid j$, replace the monomial modulo $\wp(F)$ by $\theta^{1/p}s^{j/p}$ and repeat; this terminates for negative as well as positive $j$. A positive-valuation series is in $\wp(F)$: the convergent, deterministically specified sum $-\sum_{n\ge0}b_+^{p^n}$ is a root, or use [F6] at zero. There are only finitely many negative terms. Hence for every $b$, $P(s,b)$ is the trace of its constant $s$-coefficient. No infinite additivity/continuity in the second variable has been assumed. [F1, F2, F6, step 1.1, step 2.1, construct, algebra]

4.1 Write $s=\eta_1\pi+\eta_2\pi^2+\cdots$ with $\eta_1\ne0$. Over $R=\mathbb Z[X_1,X_1^{-1},X_2,\ldots]$ form $A(T)=X_1T+X_2T^2+\cdots$. Each Laurent coefficient of $A^i$ and $A^{i-1}A'$ lies in $R$ and uses only finitely many variables. For $i\ne0$, over $\mathbb Q\otimes R$, $A^{i-1}A'=(A^i)'/i$ has zero $T^{-1}$ coefficient. Since $R$ injects into that ring, this coefficient is zero already in $R$. Specialization $X_j\mapsto\eta_j$ therefore proves $\operatorname{res}_\pi(s^{i-1}s')=0$, even when $p\mid i$. For $i=0$, $s'/s=\pi^{-1}+(s/\pi)'/(s/\pi)$ has residue $1$. If $b=\sum_{i\ge l}\theta_i s^i$, the positive terms have no residue and only finitely many negative terms occur, so $\operatorname{res}_\pi(bs'/s)=\theta_0$. Thus the trace-residue expression equals $P(s,b)$ for every uniformizer. Its product rule is multiplicativity in the first variable; each unit is $(u\pi)/\pi$, a ratio of two uniformizers. Writing an arbitrary $a=\pi^n u$ proves the displayed identity for all $a,b$. Since $P$ is independent of parameter, so is that expression. This is integral descent before characteristic-$p$ specialization, not division by a possibly zero integer in $k$. [F1, F2, step 3.1, construct, algebra]

5.1 Under the original AC/DC assumptions, [F3] says that $P(a,b)=0$ exactly when the canonical action fixes $\gamma$, equivalently when $a\in N_{F(\gamma)/F}F(\gamma)^\times$. In the split case this is the identity norm with all of $F^\times$. This supplies the full original norm criterion; additivity and multiplicativity are step 1.1. Existence of the canonical map and this general kernel clause use [A1], whereas steps 1.1–4.1 used only the supplied data and finite cochains. [A1, F1, F3, step 1.1, step 4.1, algebra] ∎

## Remark

The identity, its two linearity properties and parameter independence in
steps 1.1–4.1 are valid in ZF once the Laurent field, separable closure,
canonical map, normalized invariant, finite-character property and arithmetic
unramified action are supplied as literal data. The finite cyclic norm
vanishing needed there is proved in step 2.1 by an actual continuous
coboundary; no AC norm-kernel theorem or AC existence is used in that
identity branch. In particular the original supplied-map example over
$\mathbb F_3((t))$ may apply this identity without adding an AC hypothesis
to its Example. This says nothing about choice-free existence of that map
or the general norm-kernel branch.
