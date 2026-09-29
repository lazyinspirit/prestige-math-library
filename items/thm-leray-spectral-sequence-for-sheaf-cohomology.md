---
id: thm-leray-spectral-sequence-for-sheaf-cohomology
kind: theorem
title: Leray spectral sequence for sheaf cohomology
status: draft
origin: pipeline
landmark: false
deps:
  - def-higher-direct-image-sheaf
  - lem-ringed-space-module-sheaves-enough-injectives
  - thm-abelian-sheaves-have-enough-injectives
  - def-sheaf-cohomology-derived-global-sections
  - thm-inverse-direct-image-adjunction
  - lem-stalk-inverse-image-sheaf
  - thm-exactness-of-sheaves-stalkwise
  - thm-grothendieck-spectral-sequence
  - lem-injective-modules-flasque-and-ext-of-structure-sheaf
  - thm-flasque-sheaves-acyclic
  - thm-acyclic-resolution-theorem-for-right-derived-functors
  - thm-choice-implies-dependent-implies-countable-choice
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
      locator: "§§20.8, 20.12-20.13"
    - title: "The Stacks Project, Injectives"
      url: https://stacks.math.columbia.edu/download/injectives.pdf
      locator: "§19.5, Lemma 19.5.1"
---

## Statement

Assume the Axiom of Choice. Let $f:X\to Y$ be a morphism of schemes (more
generally a continuous map of topological spaces) and let $\mathcal F$ be an
abelian sheaf on $X$. Then there is a natural first-quadrant spectral sequence
$$E_2^{p,q}=H^p\bigl(Y,R^qf_*\mathcal F\bigr)\Longrightarrow H^{p+q}(X,\mathcal F),$$
with differentials of bidegree $(r,1-r)$, whose convergence is strong: for each
$n$ the abutment $H^n(X,\mathcal F)$ carries a finite decreasing filtration
$0\subseteq F^nH^n\subseteq\cdots\subseteq F^0H^n=H^n(X,\mathcal F)$ with
$\operatorname{gr}^pH^n\cong E_\infty^{p,n-p}$, and the edge maps are the natural
maps $H^n(Y,f_*\mathcal F)\to H^n(X,\mathcal F)$ and
$H^n(X,\mathcal F)\to H^0(Y,R^nf_*\mathcal F)$.

The same spectral sequence holds for an $\mathcal O_X$-module $\mathcal F$ with
$\mathcal O$-module cohomology on the $E_2$-page, since over a
$\mathbb C$-scheme the structure sheaf is flat over the constant sheaf
$\mathbb Z$ and every $\mathcal O_X$-injective resolution computes the same
higher direct images and cohomology as an abelian-sheaf injective resolution.

## Facts & Assumptions

**Given:** a continuous map $f:X\to Y$ (in the geometric case a morphism of
schemes) and an abelian sheaf $\mathcal F$ on $X$.

[F1] For every topological space $X$ the category $\mathrm{Ab}(X)$ has enough
injectives, and a specific functorial injective-resolution datum
$\mathcal F\mapsto I^\bullet(\mathcal F)$ is supplied.
([[thm-abelian-sheaves-have-enough-injectives]])

[F2] The global-sections functor $\Gamma(X,-)$ is additive and left exact, and
$H^q(X,\mathcal F)$ is defined as the $q$th cohomology of $\Gamma(X,I^\bullet(\mathcal F))$
for the supplied injective resolution datum of [F1].
([[def-sheaf-cohomology-derived-global-sections]])

[F3] For a continuous map $f:X\to Y$ the stalk of $f^{-1}\mathcal G$ at $x$ is
canonically $\mathcal G_{f(x)}$. ([[lem-stalk-inverse-image-sheaf]])

[F4] A sequence of sheaves of abelian groups is exact if and only if all its
stalk sequences are exact. ([[thm-exactness-of-sheaves-stalkwise]])

[F5] There is a natural bijection
$\operatorname{Hom}_X(f^{-1}\mathcal G,\mathcal F)\cong\operatorname{Hom}_Y(\mathcal G,f_*\mathcal F)$;
that is, $f^{-1}$ is left adjoint to $f_*$. ([[thm-inverse-direct-image-adjunction]])

[F6] For additive left-exact functors $G:\mathcal B\to\mathcal C$ and
$F:\mathcal A\to\mathcal B$ with enough injectives, such that $F$ carries
injectives to $G$-acyclics, there is a natural first-quadrant spectral sequence
$E_2^{p,q}=R^pG(R^qF(A))\Rightarrow R^{p+q}(GF)(A)$ with strong convergence and
finite filtration in each total degree, using supplied resolution/comparison data or DC for each construction. ([[thm-grothendieck-spectral-sequence]])

[F7] Under AC injective modules on any ringed space are flasque as abelian sheaves, and flasque abelian sheaves are acyclic on every open. An acyclic resolution computes the right derived functors under DC, which follows from AC. ([[lem-injective-modules-flasque-and-ext-of-structure-sheaf]], [[thm-flasque-sheaves-acyclic]], [[thm-acyclic-resolution-theorem-for-right-derived-functors]], [[thm-choice-implies-dependent-implies-countable-choice]])

## Proof

1.1 By [F1] fix the supplied injective resolution datum $\mathcal F\mapsto I^\bullet(\mathcal F)$ in $\mathrm{Ab}(X)$ and use it throughout; the complex $f_*I^\bullet$ is then a complex of sheaves on $Y$, and the higher direct images are the sheaves $R^qf_*\mathcal F$ defined as the cohomology sheaves of $f_*I^\bullet$ in the in-run definition `def-higher-direct-image-sheaf`, which agrees with the abelian-sheaf construction used here. [F1, F2, given]

1.2 The inverse-image functor $f^{-1}$ is exact: by [F3] the stalk of $f^{-1}$ at $x$ is the stalk of the original sheaf at $f(x)$, so $f^{-1}$ is stalkwise the exact functor of taking stalks at a point, and [F4] upgrades stalkwise exactness to exactness of the sequence of sheaves. Since $f^{-1}$ is exact and left adjoint to $f_*$ by [F5], the right adjoint $f_*$ preserves injective objects: if $I$ is injective and $M\rightarrowtail N$ is a monomorphism, every map $M\to f_*I$ corresponds to $f^{-1}M\to I$, extends along the monomorphism $f^{-1}M\rightarrowtail f^{-1}N$ by injectivity of $I$, and transposes back to an extension $N\to f_*I$. [F3, F4, F5]

2.1 Hence $f_*$ carries injective abelian sheaves on $X$ to injective sheaves on $Y$, and in particular to $\Gamma(Y,-)$-acyclic sheaves, since injective objects are acyclic for any additive left-exact functor whose derived functors are computed on injective resolutions. [F2, step 1.2]

3.1 Apply the Grothendieck spectral sequence [F6] to the composite of the additive left-exact functors $f_*:\mathrm{Ab}(X)\to\mathrm{Ab}(Y)$ and $\Gamma(Y,-):\mathrm{Ab}(Y)\to\mathbf{Ab}$, whose composite is $\Gamma(Y,f_*(-))=\Gamma(X,-)$ by the definition of the direct image; both categories have enough injectives by [F1] applied to $X$ and to $Y$, and the acyclicity hypothesis is exactly step 2.1. [F1, F2, F6, step 2.1]

4.1 The resulting spectral sequence has $E_2^{p,q}=R^p\Gamma(Y,-)\bigl(R^qf_*(-)\bigr)(\mathcal F)=H^p(Y,R^qf_*\mathcal F)$ by [F2] applied on $Y$, and abutment $R^{p+q}\Gamma(X,-)(\mathcal F)=H^{p+q}(X,\mathcal F)$; this is the displayed spectral sequence, with differentials of bidegree $(r,1-r)$ by [F6]. [F2, F6, step 3.1]

5.1 Since $R^qf_*\mathcal F=0$ for $q<0$ and $H^p(Y,-)=0$ for $p<0$, the spectral sequence of step 4.1 is first-quadrant, and [F6] supplies a finite decreasing filtration of $H^n(X,\mathcal F)$ with $\operatorname{gr}^pH^n\cong E_\infty^{p,n-p}$; in particular only finitely many terms contribute to $H^n$ in each total degree. [F6, step 4.1]

5.2 Naturality and the edge maps: the Grothendieck spectral sequence of [F6] is natural in the object $\mathcal F$ and in the pair of functors, so a morphism $\mathcal F\to\mathcal G$ of abelian sheaves induces a morphism of spectral sequences compatible with the filtrations; its edge maps are the natural maps $H^n(Y,f_*\mathcal F)\to H^n(X,\mathcal F)$ arising from the canonical identity of global-section functors $\Gamma(Y,f_*(-))=\Gamma(X,-)$: on an injective resolution the two complexes $\Gamma(Y,f_*I^\bullet)$ and $\Gamma(X,I^\bullet)$ agree degreewise, and $H^n(X,\mathcal F)\to H^0(Y,R^nf_*\mathcal F)$, which are the standard edge homomorphisms of a first-quadrant spectral sequence. [F2, F6, step 4.1]

5.3 For an arbitrary morphism of schemes, let $\mathcal F\to J^\bullet$ be a module-injective resolution. Each $J^r$ is flasque as an abelian sheaf by [F7], hence acyclic for sections on every open. A flasque abelian sheaf $J$ is also $f_*$-acyclic: take an abelian injective resolution $J\to I^\bullet$; over each $f^{-1}U$, its terms are flasque and compute $H^q(f^{-1}U,J)=0$ for $q>0$. Thus the complex $f_*I^\bullet$ is exact in positive degrees on sections over all opens $U$, and hence as a complex of sheaves. The acyclic-resolution theorem [F7] now identifies $H^q(f_*J^\bullet)$ with the abelian higher direct images and identifies $H^q(\Gamma(X,J^\bullet))$ with abelian cohomology. The same comparison on $Y$ identifies module and abelian cohomology there. Alternatively, apply [F6] directly to module direct image and global sections: $f_*J^r$ is flasque, since its restrictions are restrictions of $J^r$, and is therefore global-sections-acyclic by the comparison just proved. This yields the claimed module spectral sequence, edges and convergence, with no characteristic assumption. The flatness observation in the statement is a sufficient shortcut over $\mathbb C$, not a hypothesis needed for this general argument. [F1, F2, F6, F7, step 4.1, given]

6.1 The Axiom of Choice is used exactly in step 1.1, where the supplied injective-resolution datum of [F1] is chosen, and in step 5.3 through the $\mathcal O$-module injective supply and flasque acyclicity; AC also supplies the DC required in [F6] and [F7]; the comparison theorems for injective resolutions and the identification of cohomology across resolutions are the published AC-qualified data of [F2]. The statement claims the spectral sequence, its convergence and its edge maps, and nothing about degeneration or about splitting of the filtration. [F1, F2, F6, step 1.2, step 4.1, step 5.3, discharge-construct] ∎
