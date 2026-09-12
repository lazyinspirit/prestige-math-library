---
id: "thm-associativity-of-distribution-convolution-under-compact-support"
kind: "theorem"
title: "Associativity of distribution convolution under compact support"
deps: ["lem-convolution-of-distributions-is-well-defined-under-the-support-hypothesis", "thm-tensor-product-distributions-and-iterated-pairings", "def-distributional-derivative", "def-dirac-delta-and-its-derivatives", "lem-compactly-supported-distributions-extend-to-smooth-functions", "lem-test-function-cutoffs-and-euclidean-localization", "def-support-of-a-distribution", "def-multiplication-of-a-distribution-by-a-smooth-function"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

If $u,v,w\in\mathcal D'(\mathbb R^n)$ and at least two have compact support, both bracketings exist and $(u*v)*w=u*(v*w)$. Whenever at least one of $u,v$ has compact support,
$$\partial^\alpha(u*v)=(\partial^\alpha u)*v=u*(\partial^\alpha v).$$
For every $u$, $\delta_0*u=u$ and $(\partial^\alpha\delta_0)*u=\partial^\alpha u$. These assertions hold in ZF.

## Facts & Assumptions

[F1] Permitted convolution is bilinear, commutative, cutoff-independent and supported in the sum of the supports ([[lem-convolution-of-distributions-is-well-defined-under-the-support-hypothesis]]).

[F2] Tensor products have product support, associate, and commute with factor derivatives ([[thm-tensor-product-distributions-and-iterated-pairings]]).

[F3] Derivatives are signed test transposes; Dirac evaluates a test at zero ([[def-distributional-derivative]], [[def-dirac-delta-and-its-derivatives]]).

[F4] Compactly supported distributions extend to smooth functions by a cutoff equal to one near their support ([[lem-compactly-supported-distributions-extend-to-smooth-functions]]); such cutoffs exist ([[lem-test-function-cutoffs-and-euclidean-localization]]).

[F5] Support means local vanishing, and multiplication by a smooth function is test multiplication ([[def-support-of-a-distribution]], [[def-multiplication-of-a-distribution-by-a-smooth-function]]).

## Proof

**Given:** the indicated compact-factor hypotheses.

1.1 First suppose all three supports are compact. By F4 every pairing with a smooth function may use a product of cutoffs equal to one near the three supports. Expanding either bracketed convolution on a test $\psi$ then gives the same nested pairing $u_x(v_y(w_z(\psi(x+y+z))))$: for example the inner $w$ pairing is smooth, and the smooth extension of $u*v$ pairs it with $x+y$; inserting the three fixed cutoffs makes this exactly the tensor definition. F2's associativity identifies the bracketings. The equality holds also for all smooth $\psi$ by the same cutoffs. [given, F1, F2, F4]

2.1 In the general case let $q$ be the possibly noncompact factor and $S,T$ the two compact supports of the other factors. For a fixed compact test support $K$, the closed set $E=\operatorname{supp}q\cap(K-S-T)$ is compact. Choose $\theta=1$ near $E$ with compact support, and write $q=q_0+q_1$, where $q_0=\theta q$. The support of $q_1$ is contained in $\operatorname{supp}q$ and avoids a neighborhood of $E$, so $K$ is disjoint from $S+T+\operatorname{supp}q_1$. This last sum is closed: add the compact set $S+T$ to the closed support of $q_1$, using F1's compact-sum argument. Every permitted bracketing containing $q_1$ has support in that sum by F1 twice, and hence pairs to zero on tests supported in $K$. Both bracketings exist: either an inner pair is compactly supported, or the outer factor is one of the compact factors. Bilinearity therefore reduces both bracketings on this test to those with $q_0$. They agree by step 1.1. Since $K$ was arbitrary, associativity follows. [step 1.1, given, F1, F4, F5]

3.1 Derivatives have support contained in the original support by F3 and F5, so all asserted convolutions are permitted. For a test $\psi$ use a cutoff $\chi$ equal to one near $(\operatorname{supp}u\times\operatorname{supp}v)\cap a^{-1}(\operatorname{supp}\psi)$, where $a(x,y)=x+y$. The tensor derivative formula and F3 yield [step 2.1, F1, F2, F3, F5]
$$((\partial^\alpha u)*v)(\psi)=(-1)^{|\alpha|}(u\otimes v)(\partial_x^\alpha(\chi\,\psi\circ a)).$$
Every term differentiating $\chi$ is zero near the tensor support: on the relevant intersection all such derivatives vanish, and outside it all derivatives of $\psi\circ a$ vanish locally. These terms therefore pair to zero. The remaining term is $(-1)^{|\alpha|}(u*v)(\partial^\alpha\psi)$, giving the first identity. Differentiating in $y$ gives the other one, with the same total sign. [step 2.1, F1, F2, F3, F5]

4.1 In the cutoff definition of $\delta_0*u$, take a product cutoff with its first factor equal to one near zero and its second equal to one near $\operatorname{supp}\psi$. Evaluating the first pairing at zero leaves exactly $u(\psi)$ by F3. The differentiated identity follows from step 3.1. Zero factors give zero throughout; order zero gives the identity derivative. Only finitely many cutoffs occur for each fixed test. No associativity is asserted merely from pairwise existence without the stated two-compact-factor hypothesis. $\square$ [step 3.1, F1, F3, F4]
