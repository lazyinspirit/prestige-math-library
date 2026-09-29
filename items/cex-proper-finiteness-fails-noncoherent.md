---
id: cex-proper-finiteness-fails-noncoherent
kind: counterexample
title: "Proper cohomology need not be finite for noncoherent sheaves"
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - cor-affine-scheme-quasi-compact
  - cor-h0-projective-space-o-d-homogeneous-polynomials
  - def-affine-scheme-spectrum
  - def-associated-sheaf-module-affine-scheme
  - def-axiom-of-choice
  - def-coherent-module-scheme
  - def-direct-sum-of-a-family-of-modules
  - def-finite-type-finite-presentation-module-sheaf
  - def-module-on-ringed-space
  - def-proper-morphism
  - def-quasi-coherent-module-scheme
  - def-relative-projective-space-standard-charts
  - def-sheaf-on-topological-space
  - def-stalk-of-presheaf
  - lem-associated-sheaf-stalk-localization
  - lem-basic-opens-quasi-compact
  - lem-projective-space-diagonal-closed
  - lem-projective-space-finite-type-over-base
  - lem-relative-projective-space-universally-closed
  - thm-associated-module-sheaf-exists
  - thm-localisation-of-modules-commutes-with-quotients-and-sums
  - thm-sections-basic-open-affine-scheme
  - thm-stalk-structure-sheaf-prime-localization
  - thm-zero-sheaf-cohomology-global-sections
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Chapter 30, Sections 30.2-30.22"
      url: "https://stacks.math.columbia.edu/download/coherent.pdf"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Sections 19.1, 19.6, 19.9, 28.1-28.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Statement refuted

The statement "if $\pi:X\to\operatorname{Spec}k$ is a proper morphism with $k$
a field and $\mathcal F$ a quasi-coherent $\mathcal O_X$-module, then
$H^0(X,\mathcal F)$ is a finite-dimensional $k$-vector space" is false:
quasi-coherence cannot replace coherence. Explicitly, let $k$ be a field and
let $X=\mathbb P^1_k$ with structure morphism
$\pi:X\to\operatorname{Spec}k$, which is proper
([[lem-projective-space-diagonal-closed]],
[[lem-projective-space-finite-type-over-base]],
[[lem-relative-projective-space-universally-closed]],
[[def-proper-morphism]]); let
$$\mathcal F=\bigoplus_{r\ge1}\mathcal O_X^{(r)}$$
be the direct sum of countably many copies of the structure sheaf $\mathcal O_X$
in the category of $\mathcal O_X$-modules ([[def-module-on-ringed-space]]).
Then $\mathcal F$ is quasi-coherent ([[def-quasi-coherent-module-scheme]]), is
not coherent ([[def-coherent-module-scheme]]), indeed not even of finite type
([[def-finite-type-finite-presentation-module-sheaf]]), and
$$H^0(X,\mathcal F)\;\cong\;\bigoplus_{r\ge1}k,$$
which is not a finitely generated $k$-module, so that $H^0(X,\mathcal F)$ is
infinite-dimensional over $k$
([[thm-zero-sheaf-cohomology-global-sections]],
[[cor-h0-projective-space-o-d-homogeneous-polynomials]]). All statements hold
over every field $k$, including $\mathbb F_2$, and $\mathcal F\neq0$.

## Facts & Assumptions
**Given:** A field $k$; the projective line $X=\mathbb P^1_k$ with its standard
charts $U_0,U_1$, where $U_0=\operatorname{Spec}B$ with $B=k[x^{(0)}_1]$; the
direct sum $\mathcal F=\bigoplus_{r\ge1}\mathcal O_X$ in the category of
$\mathcal O_X$-modules; and the Axiom of Choice inherited from the cited
associated-sheaf, stalk and cohomology suppliers.

[F1] Standard charts ([[def-relative-projective-space-standard-charts]]): for
an affine base $S=\operatorname{Spec}A$ the standard chart $U^S_i$ of
$\mathbb P^n_S$ is the affine scheme
$\operatorname{Spec}A[x^{(i)}_\ell:\ell\ne i]$; hence for $n=1$ and
$S=\operatorname{Spec}k$ one has $U_0=\operatorname{Spec}B$ with
$B=k[x^{(0)}_1]$ and $U_1=\operatorname{Spec}k[x^{(1)}_0]$, the two charts
cover $X$, and on the overlap $U_0\cap U_1=D(x^{(0)}_1)\subseteq U_0$ one has
$x^{(1)}_0=1/x^{(0)}_1$.

[F2] Distinguished opens and sections ([[def-affine-scheme-spectrum]],
[[thm-sections-basic-open-affine-scheme]]): for $f\in B$ the distinguished open
$D(f)\subseteq U_0=\operatorname{Spec}B$ consists of the primes not containing
$f$, the distinguished opens form a basis of the topology of $U_0$ closed under
finite intersections, and the structure sheaf has $\mathcal O(D(f))=B_f$ with
restriction maps the canonical localisations.

[F3] Quasi-compactness ([[cor-affine-scheme-quasi-compact]],
[[lem-basic-opens-quasi-compact]]): every affine scheme, and every
distinguished open of an affine scheme, is quasi-compact.

[F4] Direct sums of modules ([[def-direct-sum-of-a-family-of-modules]]): an
element of $\bigoplus_{i\in I}M_i$ is a family $(m_i)_{i\in I}$ with $m_i=0$
for all but finitely many $i$, arithmetic in a direct sum is componentwise, and
a homomorphism out of a direct sum is determined by its components.

[F5] Sheaves of modules ([[def-sheaf-on-topological-space]],
[[def-module-on-ringed-space]]): a sheaf is a presheaf with locality and
gluing, and an $\mathcal O_X$-module is a sheaf of abelian groups whose section
groups carry $\mathcal O_X(W)$-module structures compatible with restriction.

[F6] Stalks ([[def-stalk-of-presheaf]],
[[thm-stalk-structure-sheaf-prime-localization]],
[[lem-associated-sheaf-stalk-localization]]): the stalk of a sheaf at a point
is the filtered colimit of its sections over the open neighbourhoods of the
point; for a prime $\mathfrak p$ of a ring $A$ the stalk of the structure sheaf
of $\operatorname{Spec}A$ at $\mathfrak p$ is $A_{\mathfrak p}$, and for an
$A$-module $M$ the stalk of $\widetilde M$ at $\mathfrak p$ is $M_{\mathfrak p}$,
naturally in $M$.

[F7] Associated sheaves ([[def-associated-sheaf-module-affine-scheme]],
[[thm-associated-module-sheaf-exists]]): for an $A$-module $M$ the
distinguished-open data $D(f)\mapsto M_f$, with the canonical localisation maps
as restrictions, satisfy the sheaf conditions on the basis and extend to an
$\mathcal O_{\operatorname{Spec}A}$-module $\widetilde M$, uniquely up to unique
isomorphism compatible with the identifications on distinguished opens, with
$\widetilde M(\operatorname{Spec}A)=M$; the construction is functorial in $M$.

[F8] Localisation and direct sums
([[thm-localisation-of-modules-commutes-with-quotients-and-sums]]): for a
multiplicative subset $S\subseteq A$ and a family $(M_i)_{i\in I}$ of
$A$-modules there is a natural isomorphism
$S^{-1}\bigl(\bigoplus_{i\in I}M_i\bigr)\cong\bigoplus_{i\in I}S^{-1}M_i$.

[F9] Finite type, quasi-coherence and coherence
([[def-quasi-coherent-module-scheme]],
[[def-finite-type-finite-presentation-module-sheaf]],
[[def-coherent-module-scheme]]): a quasi-coherent module is of finite type when
every point has an affine open neighbourhood $U=\operatorname{Spec}A$ with
$\mathcal F|_U\cong\widetilde M$ for a finitely generated $A$-module $M$;
restrictions of finite type modules to open subschemes are again of finite
type; a coherent module is quasi-coherent and of finite type by definition.

[F10] Degree-zero cohomology and the structure sheaf of $\mathbb P^1_k$
([[thm-zero-sheaf-cohomology-global-sections]],
[[cor-h0-projective-space-o-d-homogeneous-polynomials]]): for every abelian
sheaf there is a natural isomorphism
$H^0(X,\mathcal G)\cong\Gamma(X,\mathcal G)=\mathcal G(X)$, and
$H^0(\mathbb P^1_k,\mathcal O_{\mathbb P^1_k})\cong k[x_0,x_1]_0=k$.

[F11] Properness of the projective line
([[lem-projective-space-diagonal-closed]],
[[lem-projective-space-finite-type-over-base]],
[[lem-relative-projective-space-universally-closed]],
[[def-proper-morphism]]): the projection $\mathbb P^n_S\to S$ is separated, of
finite type and universally closed for every scheme $S$ and every $n\ge0$, and
a morphism is proper exactly when it has these three properties; hence the
structure morphism $\pi:\mathbb P^1_k\to\operatorname{Spec}k$ of the projective
line over the field $k$ is proper.

[A1] The Axiom of Choice ([[def-axiom-of-choice]]): every family of nonempty
sets has a choice function.



## Counterexample

**Proof technique:** direct: an explicit model of the coproduct by locally
finite families makes the sections on the quasi-compact charts computable, so
quasi-coherence follows from the chart presentations and $H^0$ from the
finite-support description, while coherence fails because a stalk is an
infinite direct sum of nonzero modules.

1.1 For an open $W\subseteq X$ let $\mathcal F(W)$ be the set of locally finite families $(s_r)_{r\ge1}$ with $s_r\in\mathcal O_X(W)$, meaning that every $x\in W$ has an open neighbourhood $V\subseteq W$ with $s_r|_V=0$ for all but finitely many $r$, equipped with componentwise restrictions and componentwise $\mathcal O_X(W)$-module operations: restrictions of locally finite families are locally finite, compatible families glue componentwise because the components glue in the sheaf $\mathcal O_X$ and the glued family is locally finite on each member of the cover, and the module axioms are inherited componentwise, so $\mathcal F$ is a sheaf of $\mathcal O_X$-modules as in the statement. [F5, F4]

1.2 For every prime $\mathfrak p\subseteq B$ the summand $B_{\mathfrak p}$ is nonzero: $B=k[x^{(0)}_1]$ is a domain, so its localisation $B_{\mathfrak p}$ at a prime is a domain with $1\neq0$; consequently $\bigoplus_{r\ge1}B_{\mathfrak p}$ is an infinite direct sum of nonzero modules. [F1, algebra]

2.1 The coprojections $\iota_r:\mathcal O_X\to\mathcal F$, whose sections are concentrated in the single slot $r$, make this sheaf the direct sum $\bigoplus_{r\ge1}\mathcal O_X$: for an $\mathcal O_X$-module $\mathcal G$ and morphisms $\phi_r:\mathcal O_X\to\mathcal G$ the prescription $\Phi_W\bigl((s_r)\bigr)=\sum_r\phi_r{}_{,W}(s_r)$ glues the finite sums $\sum_{r\in S}\phi_r{}_{,W'}(s_r|_{W'})$ over a cover of $W$ by opens $W'$ on which the family is finitely supported, giving a well-defined $\mathcal O_X$-linear morphism with $\Phi\circ\iota_r=\phi_r$, and it is unique because every section of $\mathcal F$ is locally a finite sum of its summands, so a morphism agreeing with $\Phi$ on all $\iota_r$ agrees with it everywhere. [step 1.1, F5, F4]

2.2 On a quasi-compact open $W\subseteq X$ every locally finite family is finitely supported, since finitely many of the neighbourhoods witnessing local finiteness cover $W$, and a component vanishing on each of them vanishes on $W$; hence for such $W$ the identity is an isomorphism $\mathcal F(W)\cong\bigoplus_{r\ge1}\mathcal O_X(W)$, and for a distinguished open $D(f)\subseteq U_0$ this reads $\mathcal F(D(f))=\bigoplus_{r\ge1}B_f$ with the componentwise localisation maps as restrictions. [F3, F2, step 1.1]

3.1 Put $N=\bigoplus_{r\ge1}B$, so that $N_f=\bigoplus_{r\ge1}B_f$ canonically for every $f\in B$ by [F8]; by step 2.2 the distinguished-open data and restrictions of $\mathcal F|_{U_0}$ and of $\widetilde N$ agree, so the uniqueness of the extension of distinguished-open data [F7] gives an isomorphism $\mathcal F|_{U_0}\cong\widetilde N$, and symmetrically $\mathcal F|_{U_1}$ is an associated sheaf on the affine chart $U_1$; since the affine opens $U_0$ and $U_1$ cover $X$, quasi-coherence of $\mathcal F$ follows by its definition [F9]. [F7, F8, F9, F1, step 2.2]

3.2 Fix $x\in U_0$ with corresponding prime $\mathfrak p\subseteq B$, so that $\mathcal O_{X,x}\cong B_{\mathfrak p}$ by [F6]; every germ of $\mathcal F$ at $x$ is represented on some distinguished open $D(f)$ with $f\notin\mathfrak p$, where the family is finitely supported by step 2.2, and the map $\theta:\mathcal F_x\to\bigoplus_{r\ge1}B_{\mathfrak p}$ sending such a germ to the tuple $(s_{r,x})_r$ of germs of its components is well defined, because two representatives agree on a smaller distinguished open and hence componentwise, injective, because a tuple of vanishing germs is annihilated on a common smaller distinguished open, and surjective, because finitely many denominators $f_r\notin\mathfrak p$ can be cleared on the single distinguished open $D(f)$, $f=\prod_rf_r\notin\mathfrak p$, giving a finitely supported family with the prescribed germs; hence $\mathcal F_x\cong\bigoplus_{r\ge1}B_{\mathfrak p}$. [F6, F2, step 2.2]

3.3 By [F10] one has $H^0(X,\mathcal F)\cong\Gamma(X,\mathcal F)=\mathcal F(X)$, and $\mathcal F(X)=\bigoplus_{r\ge1}\mathcal O_X(X)$: a locally finite family over $X$ restricts to locally finite families over the quasi-compact opens $U_0$ and $U_1$ by [F3], and by step 2.2 only finitely many components are nonzero over $U_0$ and only finitely many over $U_1$, so only finitely many components are nonzero on all of $X$. [F10, F3, step 2.2]

4.1 An infinite direct sum $M=\bigoplus_{i\in I}M_i$ of nonzero modules is not finitely generated: if $m_1,\dots,m_n$ generate $M$, each $m_j$ is supported in a finite set $S_j$ by [F4], and for any $i\notin S_1\cup\dots\cup S_n$, a nonempty complement when $I$ is infinite, the $i$-th component of a combination $\sum_ja_jm_j$ is $\sum_ja_j(m_j)_i=0$, so a nonzero element of $M_i$ does not lie in the generated submodule; with $I=\{r\ge1\}$ and $M_r=B_{\mathfrak p}\neq0$ this shows that $\mathcal F_x\cong\bigoplus_{r\ge1}B_{\mathfrak p}$ is not finitely generated over $\mathcal O_{X,x}=B_{\mathfrak p}$. [F4, step 1.2, step 3.2, algebra]

5.1 The module $\mathcal F$ is not of finite type: if it were, [F9] would provide an affine open $V=\operatorname{Spec}A$ containing $x$ and a finitely generated $A$-module $M$ with $\mathcal F|_V\cong\widetilde M$, and passing to the stalk at the prime of $A$ corresponding to $x$ would give $\mathcal F_x\cong(\widetilde M)_{\mathfrak p'}\cong M_{\mathfrak p'}$ by [F6], a module finitely generated over the local ring $A_{\mathfrak p'}=\mathcal O_{X,x}$ because the localisations of a finite generating set of $M$ generate $M_{\mathfrak p'}$, contradicting step 4.1; hence $\mathcal F$ is not coherent either, since a coherent module is of finite type by definition [F9]. [F9, F6, step 4.1, algebra]

5.2 By [F10] one has $\mathcal O_X(X)=H^0(X,\mathcal O_X)\cong k[x_0,x_1]_0=k$, so $H^0(X,\mathcal F)\cong\bigoplus_{r\ge1}k$; since $k\neq0$ and the index set is infinite, step 4.1 shows that this module is not finitely generated over $k$, that is, $H^0(X,\mathcal F)$ is infinite-dimensional over $k$, while $\pi:X\to\operatorname{Spec}k$ is proper by [F11]; this refutes the finiteness statement and exhibits the quasi-coherent noncoherent witness. [F10, F11, step 4.1, step 3.3]

6.1 Boundary and degenerate cases: $k$ is a field, so $k\neq0$, the scheme $X$ and both charts $U_0,U_1$ are nonempty and the empty and zero-ring bases are excluded; $\mathcal F\neq0$ because each summand has nonzero sections over $U_0$; the cover has the two charts as members and the summand index set $\{r\ge1\}$ is infinite, which is what step 4.1 uses; the field $k=\mathbb F_2$ and fields of every characteristic are allowed, no Noetherian, separatedness or finiteness hypothesis being used; only the degree $q=0$ of cohomology is computed, the higher cohomology of $\mathcal F$ being left unasserted; and the Axiom of Choice is inherited from the cited associated-sheaf, stalk and cohomology suppliers [A1], only finitely many selections (of the elements $f_r$ and of denominators) occurring in step 3.2. [A1, F1, step 3.2, step 4.1] ∎
