---
id: prop-integrable-weight-sets-and-multiplicities-are-weyl-invariant
kind: proposition
title: Integrable weight sets and multiplicities are weyl invariant
status: published
origin: pipeline
deps: [def-integrable-kac-moody-module, def-simple-reflections-and-the-kac-moody-weyl-group, lem-integrability-can-be-checked-on-simple-root-sl2-subalgebras, def-contragredient-lie-algebra-before-the-maximal-ideal-quotient, def-axiom-of-choice, cor-every-vector-space-has-a-basis]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
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

In any integrable $\mathfrak g(A)$-module $V$, each simple reflection gives a linear isomorphism $V_\mu\to V_{s_i\mu}$. Products give isomorphisms $V_\mu\cong V_{w\mu}$ for every $w\in W$, so $W$ preserves support and weight multiplicities. No finite-dimensionality of weight spaces is required for these isomorphisms. They transport any given basis bijectively to a basis. For arbitrary spaces, assume AC when interpreting multiplicities as cardinal sizes of bases; AC is used only to supply those bases. Finite multiplicity equality and all the displayed isomorphisms are choice-free.

## Facts & Assumptions

**Given:** An integrable weight module, a simple index $i$, and a weight $\mu$.

[F1] Both simple generators are locally nilpotent ([[def-integrable-kac-moody-module]]).

[F2] The dual reflection formulas are $s_i\mu=\mu-\mu(h_i)\alpha_i$ and $s_i h=h-\alpha_i(h)h_i$ ([[def-simple-reflections-and-the-kac-moody-weyl-group]]).

[F3] Each vector is in a finite-dimensional invariant cyclic simple-root module ([[lem-integrability-can-be-checked-on-simple-root-sl2-subalgebras]]).

[F4] The simple triple and Cartan commutator relations hold ([[def-contragredient-lie-algebra-before-the-maximal-ideal-quotient]]).

[F5] AC is the assumption for arbitrary choices ([[def-axiom-of-choice]]).

[F6] Under AC every vector space has a basis ([[cor-every-vector-space-has-a-basis]]).

## Proof

1.1 Put $e=e_i$, $f=f_i$, $h_0=h_i$. Define $T=\exp(f)\exp(-e)\exp(f)$ on $V$, with each exponential evaluated on a vector by its finite power sum, justified by F1. The inverse is $\exp(-f)\exp(e)\exp(-f)$: for a locally nilpotent operator $x$, the coefficient of $x^m$ in $\exp(x)\exp(-x)$ is $\sum_{k=0}^m(-1)^k/(k!(m-k)!)$, equal to $1$ for $m=0$ and zero otherwise. Every such multiplication on a vector is finite. Thus $T$ is a well-defined linear automorphism. [F1, given]

1.2 On a finite invariant cyclic module from F3, $e$ and $f$ are nilpotent matrices. For a nilpotent matrix $x$, multiplication of the two finite exponential polynomials and the identity $(\operatorname{ad}x)^r(y)=\sum_{k=0}^r(-1)^k\binom rk x^{r-k}yx^k$ give $\exp(x)y\exp(-x)=\sum_r(\operatorname{ad}x)^r(y)/r!$; the identity follows inductively by taking the next commutator. Apply this to the triple matrices. F4 gives conjugation by $\exp(f)$ sending $h_0$ to $h_0+2f$, and conjugation by $\exp(-e)$ sending $h_0$ to $h_0+2e$ and $f$ to $f-h_0-e$. Thus successive conjugations send $h_0$ to $h_0+2f$, then $-h_0+2f$, then $-h_0$. For a weight vector, its cyclic module is invariant under all of $\mathfrak h$: commuting a Cartan element through a word in $e,f,h_0$ expresses its action as a scalar on the original weight vector plus words of the same kind. Every $h\in\mathfrak h$ splits as $h'=h-\alpha_i(h)h_0/2$ plus $\alpha_i(h)h_0/2$. Since $\alpha_i(h')=0$, F4 makes $h'$ commute with $e,f$ and hence with $T$. Consequently $ThT^{-1}=h-\alpha_i(h)h_0=s_i h$ on all weight vectors and therefore on $V$. [F2, F3, F4, given]

2.1 By F2, $s_i^2=1$, so 1.2 also gives $T^{-1}hT=s_i h$. For $v\in V_\mu$, $hTv=T(s_i h)v=\mu(s_i h)Tv=(s_i\mu)(h)Tv$. Thus $T(V_\mu)\subseteq V_{s_i\mu}$. Its inverse satisfies the corresponding formula and sends that space into $V_\mu$, proving equality and an isomorphism. Compose these maps along any finite expression $w=s_{i_1}\cdots s_{i_r}$. The resulting map is invertible and implements the prescribed weight action; no assertion that different expressions give identical operators is needed. [F2, step 1.1, step 1.2]

3.1 These isomorphisms preserve vanishing and nonvanishing of weight spaces, proving support invariance. If $B$ is any basis of $V_\mu$, its image is independent because applying the inverse to a finite linear relation gives one among $B$; it spans because the inverse of every target vector is a finite combination of $B$. Hence the two spaces have bases in explicit bijection. In the arbitrary-space cardinal interpretation, F5 and F6 supply $B$; this is the sole use of AC. Zero weight spaces have empty bases, a one-dimensional space transports its single basis vector, and the zero module has empty support. An empty Weyl word gives the identity. Zero simple labels mean a preserved weight space, without claiming $T$ acts identically there. The isomorphism and finite-dimensional conclusions used no AC. [F5, F6, step 2.1] ∎
