---
id: lem-complete-connected-scheme-to-affine-scheme-morphism-is-constant
kind: lemma
title: Morphisms from complete connected schemes to affine schemes are constant
dependency_level: 0
deps:
  - def-affine-scheme
  - def-axiom-of-choice
  - def-complete-variety
  - def-integral-scheme
  - def-irreducible-component-scheme
  - def-locally-finite-type-and-finite-type-morphism
  - def-noetherian-topological-space
  - def-prime-spectrum-and-vanishing-sets
  - def-proper-morphism
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - lem-closed-immersion-proper
  - lem-noetherian-space-has-finitely-many-irreducible-components
  - lem-proper-stable-composition
  - thm-global-functions-proper-integral-variety
  - thm-morphisms-into-affine-scheme-global-sections
  - thm-noetherian-ring-has-noetherian-spectrum
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
status: draft
origin: pipeline
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: Appendix A.75(g), printed p. 587
    - title: J. S. Milne, Algebraic Groups (v2.00, 20 December 2015 author-hosted preliminary edition)
      url: https://www.jmilne.org/math/CourseNotes/iAG200.pdf
      locator: A.114, Appendix A, printed p. 511
---
## Statement

Assume the Axiom of Choice. Let $k$ be a field, let $Z$ be a nonempty complete connected reduced finite-type $k$-scheme, and let $Y$ be an affine $k$-scheme of finite type. Then every $k$-morphism $Z\to Y$ is constant: its image is a single closed point of $Y$.

In particular, a nonempty complete connected reduced affine finite-type $k$-scheme is the spectrum of a finite field extension of $k$. Without the reducedness hypothesis the conclusion fails: $\operatorname{Spec}k[\varepsilon]/(\varepsilon^2)$ is complete and connected but is not the spectrum of a field.

The Axiom of Choice is used through the finiteness statement for the irreducible components of a Noetherian space and through the global-functions theorem for proper integral schemes.

## Facts & Assumptions
**Given:** The Axiom of Choice, a field $k$, a nonempty complete connected reduced finite-type $k$-scheme $Z$, and an affine finite-type $k$-scheme $Y$.

[F1] A morphism of schemes is of finite type when it is locally of finite type and quasi-compact; a finite-type $k$-scheme has a finite affine open cover by spectra of finitely generated $k$-algebras. ([[def-locally-finite-type-and-finite-type-morphism]])

[F2] A finitely generated algebra over a Noetherian ring is Noetherian; a field is Noetherian. ([[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]])

[F3] The spectrum of a Noetherian commutative ring is a Noetherian topological space. ([[thm-noetherian-ring-has-noetherian-spectrum]])

[F4] A topological space is Noetherian when every descending chain of closed subsets stabilizes; a space admitting a finite open cover by Noetherian subspaces is Noetherian, since a descending chain restricts to each chart and the finitely many stabilization indices can be maximized. ([[def-noetherian-topological-space]])

[F5] Assume AC. A Noetherian topological space is a finite union of irreducible closed subsets and therefore has only finitely many irreducible components. ([[lem-noetherian-space-has-finitely-many-irreducible-components]])

[F6] An irreducible component of a scheme, regarded as a scheme, carries its reduced induced closed subscheme structure. A nonempty scheme that is reduced and irreducible is integral. ([[def-irreducible-component-scheme]], [[def-integral-scheme]])

[F7] Assume AC. Closed immersions are proper, and a composite of proper morphisms is proper. ([[lem-closed-immersion-proper]], [[lem-proper-stable-composition]])

[F8] Here, for a possibly reducible $k$-scheme, "complete" means that its structure morphism $X\to\operatorname{Spec}k$ is proper, that is, separated, of finite type and universally closed. This is the convention used in the hypotheses of this item. The definition of properness applies to arbitrary schemes; on integral separated finite-type $k$-varieties this convention agrees with the definition of completeness. ([[def-proper-morphism]], [[def-complete-variety]])

[F9] Assume AC. If $X$ is a nonempty proper integral finite-type $k$-scheme, then $\Gamma(X,\mathcal O_X)$ is a finite field extension of $k$. ([[thm-global-functions-proper-integral-variety]])

[F10] For a scheme $X$ and a ring $B$, taking global sections is a natural bijection $\operatorname{Hom}(X,\operatorname{Spec}B)\cong\operatorname{Hom}_{\mathrm{CRing}}(B,\Gamma(X,\mathcal O_X))$. For $B$ a finitely generated $k$-algebra this describes $k$-morphisms $X\to\operatorname{Spec}B$ by $k$-algebra maps. ([[thm-morphisms-into-affine-scheme-global-sections]], [[def-affine-scheme]])

[F11] Points of $\operatorname{Spec}B$ are prime ideals; the point corresponding to a maximal ideal is closed, and $V(\mathfrak m)=\{\mathfrak m\}$ for a maximal ideal $\mathfrak m$. ([[def-prime-spectrum-and-vanishing-sets]])

## Proof

**Given:** The Axiom of Choice, a nonempty complete connected reduced finite-type $k$-scheme $Z$, an affine finite-type $k$-scheme $Y$, and a $k$-morphism $f:Z\to Y$.

1.1 By [F1] choose a finite affine open cover $Z=U_1\cup\dots\cup U_s$ with $U_j=\operatorname{Spec}A_j$ and $A_j$ a finitely generated $k$-algebra. Each $A_j$ is Noetherian by [F2], so each $U_j$ is a Noetherian topological space by [F3]. A descending chain of closed subsets of $Z$ restricts to descending chains in the finitely many $U_j$, which stabilize from some index on; the largest of the finitely many indices then stabilizes the chain in $Z$, because the $U_j$ cover $Z$. Hence the underlying space of $Z$ is Noetherian by [F4]. [F1, F2, F3, F4, choose]

1.2 By [F5] the space $Z$ is a finite union of irreducible closed subsets, so $Z$ has finitely many irreducible components; let $Z_1,\dots,Z_r$ be the distinct components, each viewed with its reduced induced closed subscheme structure as in [F6]. Each $Z_i$ is nonempty, reduced and irreducible, hence integral by [F6], and each is a closed subscheme of $Z$. Since $Z$ is complete, $Z\to\operatorname{Spec}k$ is proper by [F8]; the closed immersion $Z_i\hookrightarrow Z$ is proper by [F7], and the composite $Z_i\to\operatorname{Spec}k$ is proper by [F7] again. Thus every $Z_i$ is a nonempty proper integral finite-type $k$-scheme, and [F9] gives that $K_i:=\Gamma(Z_i,\mathcal O_{Z_i})$ is a finite field extension of $k$. [F5, F6, F7, F8, F9]

2.1 Write $Y=\operatorname{Spec}B$ with $B$ a finitely generated $k$-algebra; by [F10] the morphism $f$ corresponds to the $k$-algebra map $\varphi:B\to\Gamma(Z,\mathcal O_Z)$. Fix $i$ and let $\psi_i:\Gamma(Z,\mathcal O_Z)\to K_i$ be the restriction. The composite $\varphi_i=\psi_i\circ\varphi$ is a $k$-algebra map from $B$ into the field $K_i$, so its image is a $k$-subalgebra of the finite-dimensional $k$-vector space $K_i$; it is a domain of finite dimension over $k$, hence a field, and its kernel $\mathfrak m_i$ is a maximal ideal of $B$. It follows that the restriction of $f$ to $Z_i$ factors through $\operatorname{Spec}(B/\mathfrak m_i)=\{\mathfrak m_i\}\subseteq Y$ by [F10], that is, $f$ is constant on $Z_i$ with value $y_i$, the closed point corresponding to $\mathfrak m_i$ by [F11]. [F9, F10, F11, step 1.2]

3.1 Suppose $Z_i\cap Z_j\ne\varnothing$ for some $i,j$. Choosing a point $p$ in the intersection, step 2.1 gives $y_i=f(p)=y_j$. Hence the images of two components that meet coincide. If the components could be split into two nonempty groups with no member of one meeting any member of the other, then the union of each group would be a nonempty closed subset of $Z$ — a finite union of the closed $Z_i$ — and the two unions would be disjoint and cover $Z$, contradicting connectedness of $Z$. Therefore the intersection graph of $Z_1,\dots,Z_r$ is connected, and iterating the observation just made along a path of intersections shows $y_1=\dots=y_r=:y$. [step 2.1]

4.1 As the finitely many $Z_i$ cover $Z$ by [step 1.2], every point of $Z$ lies in some $Z_i$ and therefore has image $y$; thus $f(Z)=\{y\}$ with $y$ a closed point of $Y$ by [step 2.1]. This proves the first assertion. [step 2.1, step 3.1]

5.1 For the final assertion take $Y=Z$ and $f=\operatorname{id}_Z$, which is a $k$-morphism of affine finite-type $k$-schemes when $Z$ is affine. By [step 4.1] the identity map has image a single point, so the underlying space of $Z$ consists of one point. Then $\Gamma(Z,\mathcal O_Z)$ is a reduced finite-type $k$-algebra whose spectrum is a single point, hence a field, and it is finite over $k$ by [F9] applied to $Z$, which is nonempty proper integral because it is complete, connected, reduced and a single point. [F9, step 4.1] ∎ 