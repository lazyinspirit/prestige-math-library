---
id: thm-youngs-rule-for-permutation-modules
kind: theorem
title: "Young's rule for complex permutation modules"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [lem-semistandard-homomorphisms-are-independent-and-dominance-triangular, lem-semistandard-homomorphisms-span-in-characteristic-zero, def-semistandard-tableau-and-kostka-number, thm-complex-irreducibles-of-symmetric-groups-are-specht-modules, thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order, def-young-subgroup-tabloid-and-permutation-module, def-column-antisymmetrizer-polytabloid-and-specht-module, lem-semistandard-tableau-homomorphisms-to-young-permutation-modules, cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order, def-completely-reducible-representation, cor-schurs-lemma-for-irreducible-representations, cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars, lem-integral-specht-garnir-straightening-and-field-basis]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Andrew Snowden, MATH 711 Representation Theory of Symmetric Groups, Theorem 3.12 (Young's Rule) and its proof via Theorem 3.23, Remark 3.24 and Lemma 3.29, PDF pp. 33 and 37-39"
      url: "https://people.maths.ox.ac.uk/horawa/math_711.pdf"
    - title: "David A. Craven, Groups, Geometries and Representation Theory, Lemma 2.15 and Theorem 2.16 (Young's rule), printed pp. 28-31"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Let $n\ge0$, let $\lambda,\mu\vdash n$, let $M^\mu$ be the complex Young
permutation module of shape $\mu$ with its tabloid basis
([[def-young-subgroup-tabloid-and-permutation-module]]), and let
$S^\lambda\subseteq M^\lambda$ be the complex Specht module
([[def-column-antisymmetrizer-polytabloid-and-specht-module]]). Write
$K_{\lambda,\mu}$ for the Kostka number
([[def-semistandard-tableau-and-kostka-number]]) and, for an integer $r\ge0$,
let $(S^\lambda)^{\oplus r}$ denote a direct sum of $r$ copies of
$S^\lambda$, the zero module when $r=0$. Then:

1. **(Isomorphism type.)** $M^\mu$ is completely reducible and there is an
   isomorphism of $\mathbb C S_n$-modules
   $$M^\mu\cong\bigoplus_{\lambda\vdash n}(S^\lambda)^{\oplus K_{\lambda,\mu}},$$
   the sum being over the finitely many partitions of $n$.
2. **(Multiplicity.)** In every decomposition of $M^\mu$ as a direct sum of
   irreducible subrepresentations the number of summands isomorphic to
   $S^\lambda$ equals $K_{\lambda,\mu}$; that is, the multiplicity
   $[M^\mu:S^\lambda]$ is well defined and equal to the Kostka number
   $K_{\lambda,\mu}$, independently of the decomposition.

## Facts & Assumptions

**Given:** an integer $n\ge0$, partitions $\lambda,\mu\vdash n$, the complex
Young permutation module $M^\mu$ with its tabloid basis, the Specht module
$S^\lambda\subseteq M^\lambda$, the standard reference $\lambda$-tableau $t_0$
and the homomorphisms $\theta_u:M^\lambda\to M^\mu$ attached to the fillings
$u$ of $[\lambda]$ with content $\mu$.

[F1] The tabloids of shape $\mu$ form a basis of $M^\mu$, on which $S_n$ acts
by $\sigma\cdot\{t\}=\{\sigma\cdot t\}$; the finite set $\Omega_\mu$ of
tabloids is nonempty, so $M^\mu\ne0$, and $M^\mu$ is a finite-dimensional
complex representation of $S_n$. For $n=0$ one has $\mu=\varnothing$,
$M^\varnothing=\mathbb C$ with basis the empty tabloid and trivial
$S_0$-action, and $S^\varnothing=\mathbb C$
([[def-young-subgroup-tabloid-and-permutation-module]],
[[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F2] For every filling $u$ of $[\lambda]$ with content $\mu$ the rule
$\theta_u(\{t_0\})=\sum_{v\in R_{t_0}\cdot u}v$, extended $S_n$-equivariantly,
defines an $S_n$-module homomorphism $\theta_u:M^\lambda\to M^\mu$, and its
restriction $\theta_T|_{S^\lambda}:S^\lambda\to M^\mu$ to the Specht module is
again $S_n$-linear, for every semistandard $T$ of content $\mu$
([[lem-semistandard-tableau-homomorphisms-to-young-permutation-modules]],
[[def-semistandard-tableau-and-kostka-number]]).

[F3] If $T_1,\dots,T_r$ are pairwise distinct semistandard $\lambda$-tableaux
of content $\mu$, then $\theta_{T_1}|_{S^\lambda},\dots,\theta_{T_r}|_{S^\lambda}$
are linearly independent over $\mathbb C$, so
$\dim_{\mathbb C}\operatorname{Hom}_{S_n}(S^\lambda,M^\mu)\ge K_{\lambda,\mu}$;
moreover $K_{\lambda,\lambda}=1$, and $K_{\lambda,\mu}\ne0$ implies
$\lambda\unrhd\mu$ in the dominance order
([[lem-semistandard-homomorphisms-are-independent-and-dominance-triangular]]).

[F4] The restrictions $\theta_T|_{S^\lambda}$ of the semistandard
$\lambda$-tableaux $T$ of content $\mu$ span
$\operatorname{Hom}_{S_n}(S^\lambda,M^\mu)$ over $\mathbb C$
([[lem-semistandard-homomorphisms-span-in-characteristic-zero]]).

[F5] $K_{\lambda,\mu}$ is the number of semistandard $\lambda$-tableaux of
content $\mu$; the set of fillings of $[\lambda]$ with content $\mu$ is finite;
every entry of such a filling lies between $1$ and the number $l(\mu)$ of
parts of $\mu$; and $K_{\varnothing,\varnothing}=1$
([[def-semistandard-tableau-and-kostka-number]]).

[F6] Every finite-dimensional complex representation of $S_n$ is completely
reducible, that is, a direct sum of finitely many irreducible
subrepresentations (with the empty sum allowed for the zero representation);
this is Maschke's theorem for the finite group $S_n$ in characteristic $0$,
where $\operatorname{char}\mathbb C=0$ does not divide
$|S_n|=n!$
([[cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order]],
[[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]],
[[def-completely-reducible-representation]]).

[F7] The modules $\{S^\lambda:\lambda\vdash n\}$ form a complete irredundant
list of the finite-dimensional irreducible complex $S_n$-representations:
each $S^\lambda$ is irreducible, every finite-dimensional irreducible complex
$S_n$-representation is isomorphic to some $S^\lambda$, and
$S^\lambda\cong S^\sigma$ if and only if $\lambda=\sigma$
([[thm-complex-irreducibles-of-symmetric-groups-are-specht-modules]]).

[F8] A nonzero intertwiner between irreducible representations over any field
is an isomorphism, so $\operatorname{Hom}_{S_n}(S^\lambda,S^\sigma)=0$ for
non-isomorphic irreducibles; and over the algebraically closed field
$\mathbb C$ every endomorphism of an irreducible representation is a scalar,
so $\operatorname{End}_{S_n}(S^\lambda)=\mathbb C\,\mathrm{id}_{S^\lambda}$
([[cor-schurs-lemma-for-irreducible-representations]],
[[cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars]]).

## Proof

**Proof technique:** constructive.

1.1 [construct] The restrictions $\theta_T|_{S^\lambda}:S^\lambda\to M^\mu$ of the semistandard fillings $T$ of content $\mu$ form a basis of the complex vector space $\operatorname{Hom}_{S_n}(S^\lambda,M^\mu)$: they span by [F4], they are linearly independent by [F3], and by [F5] there are exactly $K_{\lambda,\mu}$ of them. Hence $\dim_{\mathbb C}\operatorname{Hom}_{S_n}(S^\lambda,M^\mu)=K_{\lambda,\mu}$, and in particular a nonzero intertwiner $S^\lambda\to M^\mu$ exists exactly when $K_{\lambda,\mu}\ne0$. [F2, F3, F4, F5, construct, algebra]

1.2 By [F6] the finite-dimensional complex representation $M^\mu$ is completely reducible, so there are irreducible subrepresentations $U_1,\dots,U_r$ with $M^\mu=U_1\oplus\cdots\oplus U_r$; here $r\ge1$ because the tabloid basis of [F1] is nonempty. By [F7] each $U_i$ is isomorphic to $S^{\sigma(i)}$ for exactly one partition $\sigma(i)\vdash n$, and $S^\lambda\cong S^\sigma$ holds only for $\sigma=\lambda$. [F1, F6, F7, construct]

1.3 Let $W$ be a $\mathbb C S_n$-module and let $M=U_1\oplus\cdots\oplus U_r$ be a direct sum of subrepresentations with projections $\pi_i:M\to U_i$ along the other summands. Then $\pi_i$ is $S_n$-linear, so the rule $f\mapsto(\pi_1 f,\dots,\pi_r f)$ maps $\operatorname{Hom}_{S_n}(W,M)$ into $\operatorname{Hom}_{S_n}(W,U_1)\oplus\cdots\oplus\operatorname{Hom}_{S_n}(W,U_r)$; this map is $\mathbb C$-linear, it is injective because $f(w)=\sum_i f_i(w)$ is determined by its components $f_i=\pi_i f$, and it is surjective because a tuple of intertwiners $(f_1,\dots,f_r)$ defines the intertwiner $w\mapsto\sum_i f_i(w)$ of which it is the tuple of components. Hence $\operatorname{Hom}_{S_n}(W,U_1\oplus\cdots\oplus U_r)\cong\bigoplus_{i=1}^r\operatorname{Hom}_{S_n}(W,U_i)$. [construct, algebra]

1.4 For irreducible $S^\lambda$ and $S^\sigma$ one has $\dim_{\mathbb C}\operatorname{Hom}_{S_n}(S^\lambda,S^\sigma)=1$ when $\sigma=\lambda$ and $0$ otherwise. If $\sigma\ne\lambda$, then $S^\lambda$ and $S^\sigma$ are non-isomorphic by the irredundancy in [F7], so every intertwiner between them is zero by [F8]. If $\sigma=\lambda$, the same fact of [F8] makes every endomorphism of the irreducible $S^\lambda$ a scalar multiple of $\mathrm{id}_{S^\lambda}$, so $\operatorname{End}_{S_n}(S^\lambda)=\mathbb C\,\mathrm{id}_{S^\lambda}$ has dimension one. [F7, F8, algebra]

2.1 Applying step 1.3 with $W=S^\lambda$ to the decomposition of step 1.2 gives $\operatorname{Hom}_{S_n}(S^\lambda,M^\mu)\cong\bigoplus_{i=1}^r\operatorname{Hom}_{S_n}(S^\lambda,U_i)$, and substituting the isomorphism $U_i\cong S^{\sigma(i)}$ of step 1.2 into step 1.4 gives $\dim_{\mathbb C}\operatorname{Hom}_{S_n}(S^\lambda,U_i)=1$ when $\sigma(i)=\lambda$ and $0$ otherwise. Hence $\dim_{\mathbb C}\operatorname{Hom}_{S_n}(S^\lambda,M^\mu)$ equals the number $\#\{i:\sigma(i)=\lambda\}$ of summands of this decomposition isomorphic to $S^\lambda$. [step 1.2, step 1.3, step 1.4, algebra]

3.1 By step 1.1 the dimension in step 2.1 is $K_{\lambda,\mu}$, so the decomposition of step 1.2 contains exactly $K_{\lambda,\mu}$ summands isomorphic to $S^\lambda$. Steps 1.2 and 2.1 apply verbatim to every decomposition of $M^\mu$ into irreducible subrepresentations, and the quantity they compute, $\dim_{\mathbb C}\operatorname{Hom}_{S_n}(S^\lambda,M^\mu)$, depends only on $M^\mu$ and $\lambda$; hence every such decomposition contains exactly $K_{\lambda,\mu}$ summands isomorphic to $S^\lambda$ and the multiplicity $[M^\mu:S^\lambda]$ is well defined and equal to $K_{\lambda,\mu}$. Grouping the summands of step 1.2 by their isomorphism classes gives the asserted isomorphism $M^\mu\cong\bigoplus_{\lambda\vdash n}(S^\lambda)^{\oplus K_{\lambda,\mu}}$. [step 1.1, step 1.2, step 2.1, algebra]

4.1 Boundary, degenerate, characteristic and choice audit. For $n=0$ the only partition is $\varnothing$, and $M^\varnothing=\mathbb C$, $S^\varnothing=\mathbb C$, $K_{\varnothing,\varnothing}=1$ by [F1] and [F5], so claim 1 reads $M^\varnothing\cong S^\varnothing$ and steps 1.2 and 2.1 give $r=1$ with $\sigma(1)=\varnothing$. If $K_{\lambda,\mu}=0$, the summand $(S^\lambda)^{\oplus0}=0$ is omitted and claim 2 says that $S^\lambda$ does not occur in $M^\mu$; this happens for instance when $l(\lambda)>l(\mu)$, since every entry of a semistandard filling of content $\mu$ lies in $\{1,\dots,l(\mu)\}$ by [F5] while the first column of $[\lambda]$ has $l(\lambda)$ boxes carrying strictly increasing entries, and also for $\mu=(n)$ with $\lambda\ne(n)$, where all entries of a filling of content $(n)$ are equal to $1$ and a column of length at least two cannot strictly increase. If $K_{\lambda,\mu}=1$, the summand is a single copy of $S^\lambda$: by [F3] this happens for $\lambda=\mu$, so every $M^\lambda$ contains exactly one copy of $S^\lambda$; and it happens for the one-row shape $\lambda=(n)$ for every $\mu\vdash n$, since a semistandard filling of the single-row diagram $(n)$ with content $\mu$ is exactly the weakly increasing word $1^{\mu_1}2^{\mu_2}\cdots$ of content $\mu$, which exists and is unique. The argument is particular to $\mathbb C$: [F6] uses that $\operatorname{char}\mathbb C=0$ does not divide $|S_n|=n!$ and [F8] uses that $\mathbb C$ is algebraically closed, and no analogue over a field of positive characteristic is asserted. The only selection made is the decomposition of the finite-dimensional module $M^\mu$ into finitely many irreducible summands, whose existence is supplied by [F6]; step 3.1 shows the multiplicities do not depend on this selection, and no choice principle is invoked. This proves claims 1 and 2. [F1, F3, F5, F6, F7, given, step 3.1, discharge-construct] ∎

## Remarks

- **The two computations of one number.** Young's rule is the equality of two
  counts of $\dim_{\mathbb C}\operatorname{Hom}_{S_n}(S^\lambda,M^\mu)$: the
  semistandard construction of
  [[lem-semistandard-homomorphisms-are-independent-and-dominance-triangular]]
  and [[lem-semistandard-homomorphisms-span-in-characteristic-zero]] exhibits
  a basis indexed by the semistandard tableaux, while complete reducibility of
  $M^\mu$ and Schur's lemma compute the same dimension as the multiplicity of
  $S^\lambda$. Equivalently, for complex representations
  $[M^\mu:S^\lambda]=\dim_{\mathbb C}\operatorname{Hom}_{S_n}(S^\lambda,M^\mu)$.

- **No Robinson-Schensted-Knuth input.** The count $K_{\lambda,\mu}$ of
  semistandard tableaux enters only through its definition
  ([[def-semistandard-tableau-and-kostka-number]]); the spanning argument
  behind the basis of the Hom space is the Garnir straightening computation of
  [[lem-integral-specht-garnir-straightening-and-field-basis]], not the
  Robinson-Schensted-Knuth correspondence used in Craven's dimension count
  (Craven Theorem 2.16, printed pp. 28-31).

- **Dominance.** Combining claims 1 and 2 with the dominance part of [F3]
  shows that the sum in claim 1 is supported on the shapes
  $\lambda\unrhd\mu$: the permutation module $M^\mu$ is a direct sum of Specht
  modules of shapes dominating $\mu$, with $S^\mu$ itself occurring exactly
  once, in agreement with
  [[lem-semistandard-homomorphisms-are-independent-and-dominance-triangular]].
