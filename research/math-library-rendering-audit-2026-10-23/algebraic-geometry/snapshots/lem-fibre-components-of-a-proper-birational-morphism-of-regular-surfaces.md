---
id: lem-fibre-components-of-a-proper-birational-morphism-of-regular-surfaces
kind: lemma
title: Fibres of a proper birational morphism of regular surfaces
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps:
- cor-closed-points-dense-in-affine-spectra
- def-axiom-of-choice
- def-birational-morphism-schemes
- def-dimension-noetherian-topological-space
- def-embedding-dimension-and-regular-local-ring
- def-etale-locus-morphism
- def-integral-scheme
- def-locally-noetherian-and-noetherian-scheme
- def-proper-morphism
- def-quasi-finite-morphism-schemes
- def-smooth-morphism-schemes
- lem-proper-fibres-proper
- thm-etale-locus-open
- thm-etale-morphisms-open-and-quasi-finite
- thm-one-dimensional-regular-local-rings-are-dvrs
- thm-proper-quasi-finite-is-finite
- thm-regular-local-rings-are-normal
- thm-finite-morphism-integral-closed
- thm-normality-is-local-for-domains
- cor-quasi-finite-algebra-is-source-locally-a-localization-of-a-finite-algebra
- cor-quasi-finite-locus-open-finite-type-algebra
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: The Stacks Project, Resolution of Surfaces, Section 54.7 (Vanishing)
    url: https://stacks.math.columbia.edu/tag/0AX7
  - title: The Stacks Project, Resolution of Surfaces, Chapter 54 (complete chapter PDF)
    url: https://stacks.math.columbia.edu/download/resolve.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field, let $X$ and $Y$ be integral regular finite-type $k$-schemes of pure dimension two, let $f\colon X\to Y$ be a proper birational morphism and let $y\in Y$ be a closed point. Put $F=f^{-1}(y)$. Then:

1. $F$ is a proper $\kappa(y)$-scheme with $\dim F\le 1$.
2. If $\dim F=1$, then $F$ has finitely many irreducible components $C_1,\dots,C_r$; each, with its reduced induced structure, is an integral proper curve over $\kappa(y)$ ([[def-integral-scheme]], [[lem-proper-fibres-proper]]); and each $C_i$ contains a closed point $x_i$ with $x_i\notin C_j$ for every $j\neq i$.
3. For every generic point $\xi$ of a one-dimensional component of $F$ the local ring $\mathcal O_{X,\xi}$ is a discrete valuation ring, and $f^\sharp$ identifies the function field of $Y$ with the function field of $X$.
4. The set $N(f)$ of integral curves $C\subseteq X$ with $\dim f(C)=0$ is finite. More precisely, the non-étale locus $Z\subseteq X$ of $f$ ([[def-etale-locus-morphism]]) is closed and not all of $X$, every contracted curve is contained in $Z$, and $N(f)$ is at most the number of irreducible components of $Z$.
5. If $f$ is not an isomorphism, then $N(f)>0$. Equivalently, if every fibre of $f$ is finite, then $f$ is an isomorphism.

## Facts & Assumptions

**Given:** A field $k$, integral regular finite-type $k$-schemes $X$ and $Y$ of pure dimension two, a proper birational morphism $f\colon X\to Y$ and a closed point $y\in Y$.

[F1] *lem-proper-fibres-proper.* Assume the Axiom of Choice. Let $f:X\to S$ be a proper morphism of schemes and let $s\in S$ be a point, not necessarily closed. Then the scheme-theoretic fibre $X_s=X\times_S\operatorname{Spec}\kappa(s)$ is proper over $\operatorname{Spec}\kappa(s)$. ([[lem-proper-fibres-proper]])

[F2] *def-birational-morphism-schemes.* Let $k$ be a field and let $X$ and $Y$ be integral $k$-schemes of finite type ([[def-integral-scheme]], def-locally-finite-type-and-finite-type-morphism). ([[def-birational-morphism-schemes]])

[F3] *def-dimension-noetherian-topological-space.* For a Noetherian topological space $T$, define $\dim T$ as the supremum of the lengths $s$ of strict chains $Z_0\subsetneq\cdots\subsetneq Z_s$ of nonempty irreducible closed subsets of $T$. Thus a one-member chain has length zero. Set $\dim\varnothing=-\infty$, and allow $\dim T=+\infty$. The supremum of an empty family of dimensions is $-\infty$. ([[def-dimension-noetherian-topological-space]])

[F4] *def-locally-noetherian-and-noetherian-scheme.* A scheme is **locally Noetherian** if it has an affine open cover by spectra of Noetherian rings. It is **Noetherian** if it is locally Noetherian and quasi-compact; equivalently, it has a finite affine open cover by spectra of Noetherian rings. ([[def-locally-noetherian-and-noetherian-scheme]])

[F5] *thm-one-dimensional-regular-local-rings-are-dvrs.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). A nonzero Noetherian local ring of dimension one is regular if and only if it is a discrete valuation ring. Fields are excluded from the term DVR. ([[thm-one-dimensional-regular-local-rings-are-dvrs]])

[F6] *def-embedding-dimension-and-regular-local-ring.* For a nonzero commutative Noetherian local ring $(R,\mathfrak m,k)$, define $\operatorname{edim}R=\dim_k(\mathfrak m/\mathfrak m^2)$. The ring is **regular local** when $\operatorname{edim}R=\dim R$. The cotangent space is intrinsic, and is finite-dimensional because $\mathfrak m$ is finitely generated. ([[def-embedding-dimension-and-regular-local-ring]])

[F7] *def-etale-locus-morphism.* Let $f:X\to S$ be a morphism locally of finite presentation (def-locally-finite-presentation-morphism). The **étale locus** of $f$ is $\operatorname{Et}(f)=\{x\in X:\text{the morphism }f\text{ is étale at }x\}\subseteq X,$ the set of points at which the conditions of def-etale-morphism-schemes hold. ([[def-etale-locus-morphism]])

[F8] *thm-etale-locus-open.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $f\colon X\to S$ be a morphism locally of finite presentation (def-locally-finite-presentation-morphism) and let $\operatorname{Et}(f)=\{x\in X: f\text{ is \'etale at }x\}$ be its \'etale locus ([[def-etale-locus-morphism]]). ([[thm-etale-locus-open]])

[F9] *thm-etale-morphisms-open-and-quasi-finite.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $f\colon X\to S$ be \'etale (def-etale-morphism-schemes). 1. $f$ is flat and locally of finite presentation (def-flat-morphism-schemes, def-locally-finite-presentation-morphism) and therefore universally open (def-open-morphism-schemes). 2. ([[thm-etale-morphisms-open-and-quasi-finite]])

[F10] *def-quasi-finite-morphism-schemes.* A morphism of schemes $f:X\to S$ is **quasi-finite** if it is of finite type (def-locally-finite-type-and-finite-type-morphism) and, for every point $x\in X$, there are affine neighbourhoods $U=\operatorname{Spec}(B)$ of $x$ and $V=\operatorname{Spec}(A)$ of $f(x)$ such that $f(U)\subseteq V$ and the induced finite-type ring map $A\to B$ is quasi-finite at the prime  ([[def-quasi-finite-morphism-schemes]])

[F11] *thm-proper-quasi-finite-is-finite.* Assume the Axiom of Choice. Every proper quasi-finite morphism of schemes $f:X\to S$ is finite ([[def-proper-morphism]], [[def-quasi-finite-morphism-schemes]], def-finite-morphism-schemes). No Noetherian or nonemptiness hypothesis is imposed, and the assertion is local on the base. ([[thm-proper-quasi-finite-is-finite]])

[F18] *thm-normality-is-local-for-domains.* Assume AC. For a domain $A$, integrally closedness is equivalent to integral closedness of every maximal localization $A_{\mathfrak m}$. Thus a regular Noetherian domain whose local rings are regular local is integrally closed, since the local criterion applies to its maximal localizations. ([[thm-normality-is-local-for-domains]])

[F19] *thm-finite-morphism-integral-closed.* Assume AC. If $g:Y\to S$ is finite, then on every affine open $U=\operatorname{Spec}(A)\subseteq S$ with $g^{-1}(U)=\operatorname{Spec}(B)$, the ring map $A\to B$ is integral. ([[thm-finite-morphism-integral-closed]])

[F13] *cor-closed-points-dense-in-affine-spectra.* Assume the Axiom of Choice. Let $k$ be a field, let $A$ be a finite-type $k$-algebra, and let $Z\subseteq\operatorname{Spec}(A)$ be closed. Then every nonempty open subset of $Z$ contains a closed point of $\operatorname{Spec}(A)$. Equivalently, the closed points are dense in every closed subset of $\operatorname{Spec}(A)$. ([[cor-closed-points-dense-in-affine-spectra]])

[F14] *def-integral-scheme.* An **integral scheme** is a nonempty scheme that is reduced and whose underlying topological space is irreducible. Equivalently, it is nonempty and every nonempty affine open is the spectrum of a domain. The latter criterion is independent of the chosen affine open cover. ([[def-integral-scheme]])

[F15] *def-proper-morphism.* A morphism of schemes $f:X\to S$ is **proper** if and only if it is separated, of finite type, and universally closed. Here separatedness has the meaning of def-separated-morphism-schemes, finite type has the meaning of def-locally-finite-type-and-finite-type-morphism, and universally closed has the meaning of def-universally-closed-morphism. ([[def-proper-morphism]])

[F16] *thm-regular-local-rings-are-normal.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Every regular local ring is an integrally closed domain. Every commutative regular Noetherian ring is normal and is a finite product of regular domains, with the zero ring corresponding to the empty product. ([[thm-regular-local-rings-are-normal]])

[F17] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F20] A quasi-finite finite-type algebra is source-locally a principal localization of a finite subalgebra of its relative integral closure; the quasi-finite locus is open. ([[cor-quasi-finite-algebra-is-source-locally-a-localization-of-a-finite-algebra]], [[cor-quasi-finite-locus-open-finite-type-algebra]])

## Proof

1.1 The fibre $F=f^{-1}(y)$ is a proper $\kappa(y)$-scheme by properness of $f$, and $F$ is closed in $X$ of dimension at most one: a closed irreducible subset of the integral scheme $X$ of the same dimension two would equal $X$, forcing $f(X)=\{y\}$ and contradicting dominance of the birational morphism $f$. [F1, F2, F3, F4, F14]

2.1 Assume $\dim F=1$; there can be no isolated zero-dimensional component. Indeed at an isolated fibre point $x$, the morphism is quasi-finite. On affine normal target and quasi-finite source neighbourhoods, the source-local finite-algebra factorization gives a principal open immersion: its finite intermediate algebra lies in the common fraction field and is integral over the normal target, hence equals that target. Its inverse is a section over a target open; the section is closed because $f$ is separated, and its image contains the generic point of the integral inverse image, so it is the whole inverse image (the defining ideal is zero by reducedness). Thus the entire fibre would be one point, contrary to $\dim F=1$. Now Noetherianity gives finitely many irreducible components $C_1,\dots,C_r$, each of dimension one, and each $C_i$ with its reduced induced structure is an integral proper curve over $\kappa(y)$ as a closed subscheme of $F$. The open subset of $C_i$ obtained by removing the finitely many closed sets $C_j\cap C_i$, $j\ne i$, is nonempty because $C_i$ is irreducible and no $C_j$ contains it; by density of closed points in finite-type $k$-schemes it contains a closed point $x_i$, which is closed in $F$ and lies on no other $C_j$. [F1, F4, F13, F14, F15, F16, F18, F20, step 1.1]

3.1 For the generic point $\xi$ of a one-dimensional component of $F$ the local ring $\mathcal O_{X,\xi}$ is a regular local ring of dimension one, because $X$ is regular of pure dimension two and the closure of $\xi$ has dimension one; by the one-dimensional criterion it is a discrete valuation ring. Since $f$ is birational, the stalk map identifies $K(Y)=\mathcal O_{Y,\eta_Y}$ with $\mathcal O_{X,\eta_X}=K(X)$, and in particular $f^{\sharp}$ is injective on the function field of $Y$. [F2, F5, F6, step 2.1]

4.1 Let $C\subseteq X$ be an integral curve with $f(C)$ a single point and let $\xi$ be its generic point. The fibre of $f$ through $\xi$ contains $C$, so $f$ is not quasi-finite at $\xi$; since an etale morphism is quasi-finite at every point, $f$ is not etale at $\xi$. Hence $\xi\notin\operatorname{Et}(f)$, and since the non-etale locus $Z=X\setminus\operatorname{Et}(f)$ is closed, $C\subseteq Z$. [F7, F9, F10, step 3.1]

5.1 The non-etale locus $Z$ is closed because $\operatorname{Et}(f)$ is open, and $Z\ne X$: the generic point $\eta_X$ of the integral scheme $X$ lies in $\operatorname{Et}(f)$, since the stalk map $K(Y)\to K(X)$ is an isomorphism of fields, hence flat with trivial residue field extension. [F2, F7, F8, step 4.1]

6.1 Every component of $Z$ has dimension at most one: a closed component of dimension two would equal $X$, contradicting step 5.1. If $C$ is a contracted integral curve contained in $Z$ and $Z_0$ is a component of $Z$ containing $C$, then $\dim Z_0=1$ and $C\subseteq Z_0$ are irreducible closed subsets of $X$ of dimension one, so $C=Z_0$; distinct contracted curves therefore lie in distinct components of $Z$, and the set $N(f)$ has at most as many elements as $Z$ has components, a finite number because $X$ is Noetherian. [F3, F4, step 4.1, step 5.1]

7.1 If every fibre of $f$ is finite then $f$ is quasi-finite, hence finite because it is proper. Cover $Y$ by affine opens $U=\operatorname{Spec}(A)$; their inverse images are affine $f^{-1}(U)=\operatorname{Spec}(B)$ and $A\to B$ is integral by [F19]. Both are domains, and birationality identifies their fraction fields and makes $A\to B$ injective. Every maximal localization of $A$ is a regular local ring, hence integrally closed by [F16]; [F18] then implies that $A$ is integrally closed. Since $B$ lies in the common fraction field and is integral over $A$, $B\subseteq A$, so $A=B$ on every such chart. Therefore $f$ is an isomorphism. [F2, F11, F15, F16, F18, F19, step 6.1]

8.1 Conversely, if $N(f)$ is empty then every fibre of $f$ is finite: a fibre containing a one-dimensional irreducible component would contain the generic point of an integral curve contracted by $f$, giving an element of $N(f)$. Together with the previous step this shows that $f$ is an isomorphism if and only if $N(f)$ is empty. [F3, F14, step 2.1, step 7.1, F17] ∎

## Remarks

- The conclusion $\dim F\le1$ is the only place where birationality enters as dominance; all remaining arguments use properness, regularity and normality.
- The non-etale locus $Z$ is the scheme-theoretically meaningful carrier of the contracted curves; the count in assertion 4 is by components, not by points of $Z$.
