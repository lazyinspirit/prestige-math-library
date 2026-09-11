---
id: lem-simple-root-power-relations-generate-the-integrable-quotient
kind: lemma
title: Simple root power relations generate the integrable quotient
status: draft
origin: pipeline
deps: [thm-universal-property-and-pbw-character-of-kac-moody-verma-modules, def-kac-moody-integral-and-dominant-integral-weights, def-integrable-kac-moody-module, lem-serre-elements-vanish-before-serre-generation, def-contragredient-lie-algebra-before-the-maximal-ideal-quotient, def-kac-moody-category-o]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Kleshchev, Lectures on Infinite Dimensional Lie Algebras
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Introduction to Kac-Moody Groups and Lie Algebras
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
proof_strategy: direct
---

## Statement

For $\lambda\in P^+$ put $m_i=\lambda(h_i)$ and let $v$ be the highest vector of $M_A(\lambda)$. Set $N=\sum_i U(\mathfrak g)f_i^{m_i+1}v$. Then $M_A(\lambda)/N$ is a nonzero integrable highest-weight module of weight $\lambda$. This holds for every finite GCM over $\mathbb C$.

## Facts & Assumptions

**Given:** The dominant weight, Verma module and displayed submodule.

[F1] Verma universality, negative PBW spanning, top dimension one and support in $\lambda-Q^+$ hold by [[thm-universal-property-and-pbw-character-of-kac-moody-verma-modules]].

[F2] Each $m_i$ is a nonnegative integer ([[def-kac-moody-integral-and-dominant-integral-weights]]).

[F3] Integrability is the weight decomposition together with local nilpotence of both simple generators ([[def-integrable-kac-moody-module]]).

[F4] The negative Serre relations $(\operatorname{ad}f_i)^{1-a_{ij}}f_j=0$ hold ([[lem-serre-elements-vanish-before-serre-generation]]).

[F5] Submodules and quotients in $\mathcal O$ have the induced weight decompositions ([[def-kac-moody-category-o]]).

[F6] The Cartan and opposite-generator commutator relations hold ([[def-contragredient-lie-algebra-before-the-maximal-ideal-quotient]]).

## Proof

1.1 Put $u_i=f_i^{m_i+1}v$. From F6, $h_i f_i^rv=(m_i-2r)f_i^rv$. Starting with $e_iv=0$, the recurrence $e_i f_i^{r+1}v=f_i e_i f_i^rv+h_i f_i^rv$ gives $e_i f_i^rv=r(m_i-r+1)f_i^{r-1}v$ by induction; substituting $r=m_i+1$ gives $e_i u_i=0$. If $j\ne i$, F6 gives $[e_j,f_i]=0$, hence $e_j u_i=f_i^{m_i+1}e_jv=0$. Thus every simple raising generator kills $u_i$, and so does their generated algebra $\mathfrak n^+$. Its weight is $\lambda-(m_i+1)\alpha_i$ by F6. Universality and negative PBW spanning in F1 imply that $U(\mathfrak g)u_i$ has support in $\lambda-(m_i+1)\alpha_i-Q^+$, even if $u_i=0$. Since $m_i+1>0$, this cone misses $\lambda$. Therefore their sum $N$ misses the one-dimensional top. By F5 the quotient is a weight module, and its surviving top vector $\bar v$ generates it; in particular it is nonzero. [F1, F2, F5, F6, given]

1.2 Fix $i$ and put $D=\operatorname{ad}f_i$ on $U(\mathfrak g)$. On Lie generators its nilpotence follows from F4 and F6: $D^{1-a_{ij}}f_j=0$ for $j\ne i$, $Df_i=0$, $De_j=0$ for $j\ne i$, $De_i=-h_i$, $D^2e_i=-2f_i$, $D^3e_i=0$, and $D^2h=0$. These Lie generators also generate the enveloping algebra as an associative algebra. In the enveloping algebra, induction using the derivation rule and Pascal addition gives $D^r(ab)=\sum_{k=0}^r\binom rk D^k(a)D^{r-k}(b)$. If $D^pa=0$ and $D^qb=0$, every summand vanishes for $r\geq p+q-1$. Induction on product length and a maximum for finite sums show that for each $u\in U(\mathfrak g)$ there is $K\geq1$ with $D^Ku=0$. [F4, F6, given]

2.1 On a quotient weight vector of weight $\lambda-\beta$, write $\beta=\sum_j b_j\alpha_j\in Q^+$. Applying $e_i^{b_i+1}$ would give weight $\lambda-\beta+(b_i+1)\alpha_i$, outside $\lambda-Q^+$ because its $i$-coordinate difference is $-1$. The quotient support is contained in that cone by F1 and 1.1, so this power vanishes. Taking the maximum exponent over the finitely many weight components of a vector proves local nilpotence of every $e_i$. [F1, step 1.1]

2.2 In any associative algebra, $f_i^r u=\sum_{k=0}^r\binom rk D^k(u)f_i^{r-k}$. For $r=0$ the assertion is $u=u$; multiplication on the left by $f_i$, followed by $f_i a=D(a)+af_i$ and Pascal addition, proves the induction step. Apply this identity to $\bar v$ and take $r=K+m_i$, where $K$ is from 1.2. Terms with $k\geq K$ vanish because $D^ku=0$. For $k<K$, $r-k\geq m_i+1$ and the defining relation $f_i^{m_i+1}\bar v=0$ kills the term. Every quotient vector is $u\bar v$ for some $u$, so $f_i$ is locally nilpotent. [F2, step 1.1, step 1.2]

3.1 The weight decomposition in 1.1 and both nilpotence conclusions give integrability by F3. If $m_i=0$, the imposed relation is $f_i\bar v=0$ and the same bound is $r=K$. For $u=0$ choose $K=1$. Empty sets of simple roots impose no relations and give the one-dimensional Cartan Verma module by F1. All sums defining elements, polynomial expansions and bounds are finite; no AC or assertion that Serre elements generate a defining ideal enters. [F1, F3, step 1.1, step 2.1, step 2.2] ∎
