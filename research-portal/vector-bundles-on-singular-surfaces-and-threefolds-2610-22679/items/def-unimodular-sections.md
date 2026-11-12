---
id: def-unimodular-sections
kind: definition
title: Unimodular elements and trivial summands
status: published
domain: mathematics
deps:
  - lem-affine-bundle-module-interface
  - math:def-scheme
  - math:def-module-on-ringed-space
  - math:def-fibre-of-module-at-point
  - math:def-sheaf-hom
  - math:def-affine-scheme-spectrum
  - math:lem-associated-sheaf-stalk-localization
  - math:def-residue-field-scheme-point
  - math:cor-residue-field-of-a-localisation-at-a-prime
  - math:def-axiom-of-choice
  - math:thm-proper-ideal-contained-in-maximal-ideal
  - math:cor-maximal-ideals-are-prime
  - math:def-stalk-of-presheaf
  - math:def-localisation-of-a-module
dependency_roles:
  lem-affine-bundle-module-interface: mathematical-premise
  math:def-scheme: mathematical-premise
  math:def-module-on-ringed-space: mathematical-premise
  math:def-fibre-of-module-at-point: mathematical-premise
  math:def-sheaf-hom: mathematical-premise
  math:def-affine-scheme-spectrum: mathematical-premise
  math:lem-associated-sheaf-stalk-localization: mathematical-premise
  math:def-residue-field-scheme-point: mathematical-premise
  math:cor-residue-field-of-a-localisation-at-a-prime: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:thm-proper-ideal-contained-in-maximal-ideal: mathematical-premise
  math:cor-maximal-ideals-are-prime: mathematical-premise
  math:def-stalk-of-presheaf: mathematical-premise
  math:def-localisation-of-a-module: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 1
---

## Definition
Let $A$ be a commutative ring with identity and $P$ a finite projective $A$-module: $P$ is finitely generated, and maps from $P$ lift through surjective module homomorphisms. An element $p\in P$ is **unimodular** if there is an $A$-linear functional $\phi:P\to A$ with $\phi(p)=1$. A functional $\phi:P\to A$ is **unimodular** if it is surjective. A pair $(p,\phi)$ with $\phi(p)=1$ is a **unimodular pair**.

A vector bundle $E$ on a scheme $X$ is a finite locally free $\mathcal O_X$-module: every point has an open neighbourhood on which $E$ is a finite direct sum of copies of $\mathcal O_X$. Its dual is $E^\vee=\mathcal Hom_{\mathcal O_X}(E,\mathcal O_X)$. A global section $s\in\Gamma(X,E)=E(X)$ is **nowhere zero** if, at every point $x$, its image in the fiber $E_x\otimes_{\mathcal O_{X,x}}k(x)$ is nonzero, where $E_x$ is the stalk and $k(x)=\mathcal O_{X,x}/\mathfrak m_x$ is the residue field of the local ring $\mathcal O_{X,x}$. Equivalently, locally on $X$ the map $\mathcal O_X\to E$, $1\mapsto s$, identifies $\mathcal O_X$ with a direct summand of $E$. A morphism $E\to\mathcal O_X$ is instead a global section of the dual $E^\vee$.

Assume the Axiom of Choice for the following affine correspondence. On $X=\operatorname{Spec}A$, the bundle associated to a finite projective module $P$ has global sections $P$; under this identification a section is nowhere zero exactly when its element is unimodular. A unimodular pair gives an isomorphism $A\oplus\ker\phi\to P$, $(a,q)\mapsto ap+q$. In particular, a surjective functional on $P$ belongs to such a pair.

## Justification
The fiber is the functorial vector space obtained from the stalk by reduction modulo its maximal ideal, so the fiber condition is independent of a local frame. The equivalences and the displayed direct-sum decomposition are established below. The affine assertion uses Choice through the affine module–bundle and associated-stalk interfaces, and through proper-ideal containment in a maximal ideal.

## Facts & Assumptions

**Given:** A commutative ring $A$, a finite projective $A$-module $P$, a scheme $X$ with a vector bundle $E$, and the Axiom of Choice for the affine assertions.

**Goal:** Justify the local description of nowhere-zero sections and the stated affine equivalences and splitting.

[F1] Under the Axiom of Choice, finite projective $A$-modules and vector bundles on $\operatorname{Spec}A$ correspond by associated sheaf and global sections, preserving finite direct sums and duals. Finite projective means finitely generated with the lifting property in the Definition. [[lem-affine-bundle-module-interface]]

[F2] A scheme is locally an affine scheme and has local stalk rings. A module sheaf has linear restriction maps and linear morphisms. Its fiber at $x$ is $E_x\otimes_{\mathcal O_{X,x}}k(x)\cong E_x/\mathfrak m_x E_x$; this construction is functorial in morphisms and commutes with restriction to an open neighbourhood. Internal Hom has sections $\mathcal Hom(E,F)(V)=\operatorname{Hom}_{\mathcal O_V}(E|_V,F|_V)$, so its global sections are sheaf morphisms. [[math:def-scheme]] [[math:def-module-on-ringed-space]] [[math:def-fibre-of-module-at-point]] [[math:def-sheaf-hom]]

[F3] Points of $\operatorname{Spec}A$ are prime ideals. Under AC the associated-sheaf stalk is naturally $(\widetilde P)_{\mathfrak p}\cong P_{\mathfrak p}$. The scheme residue field identifies with $A_{\mathfrak p}/\mathfrak p A_{\mathfrak p}\cong\operatorname{Frac}(A/\mathfrak p)$; in this field the image of $a\in A$ is zero exactly when $a\in\mathfrak p$. [[math:def-affine-scheme-spectrum]] [[math:lem-associated-sheaf-stalk-localization]] [[math:def-residue-field-scheme-point]] [[math:cor-residue-field-of-a-localisation-at-a-prime]]

[F4] AC asserts that every family of nonempty sets has a choice function. Under AC a proper ideal in a nonzero commutative ring is contained in a maximal ideal; every maximal ideal is prime. [[math:def-axiom-of-choice]] [[math:thm-proper-ideal-contained-in-maximal-ideal]] [[math:cor-maximal-ideals-are-prime]]

[F5] A stalk consists of germs of sections on open neighbourhoods; equality of germs means equality on some smaller neighbourhood. In particular an inverse germ can be represented by a section, and its inverse identity holds after shrinking. [[math:def-stalk-of-presheaf]]

[F6] The localization $S^{-1}M$ consists of fractions $m/s$, with $m/s=n/t$ exactly when $u(tm-sn)=0$ for some $u\in S$. Localizing a linear map sends $m/s$ to the image of $m$ divided by $s$; this is well-defined by that relation. At a prime $\mathfrak p$ take $S=A\setminus\mathfrak p$. [[math:def-localisation-of-a-module]]

## Proof

**Proof technique:** direct; use local coordinates and the affine module–bundle correspondence.

1.1 On a neighbourhood of $x$, choose a frame of $E$ and write $s=(a_1,\ldots,a_r)$. By [F2] its fiber is the coordinate vector over $k(x)$, so it is nonzero exactly when some $a_i$ has nonzero residue. Such a coordinate has an invertible germ: choose any affine neighbourhood $W\cong\operatorname{Spec}B$ of $x$ using [F2]. It need not lie in the frame chart. By [F3], the canonical identification $\mathcal O_{X,x}\cong B_{\mathfrak q}$ at the corresponding prime $\mathfrak q$ represents the germ of $a_i$ as $b/t$ with $t\notin\mathfrak q$. Its nonzero residue implies $b\notin\mathfrak q$, so $t/b$ is its inverse germ. By [F5], represent this inverse germ by a section, intersect its domain with the original frame chart, and shrink further until its product with $a_i$ is $1$. Projection to that coordinate followed by multiplication by its inverse gives a functional $\rho$ taking $s$ to $1$. The maps $(a,q)\mapsto as+q$ and $v\mapsto(\rho(v),v-\rho(v)s)$ then identify $E$ locally with $\mathcal O_X\oplus\ker\rho$. Conversely, a local splitting sends the fiber value of $s$ to $1$ by functoriality in [F2], so that value is nonzero. For rank zero neither condition holds at a point; on the empty scheme both are vacuous. This proves the local equivalence, and the internal Hom description in [F2] identifies functionals with global sections of the dual. [F2, F3, F5, F6, given, construct]

1.2 If $\phi(p)=1$, the map $(a,q)\mapsto ap+q$ from $A\oplus\ker\phi$ to $P$ has inverse $v\mapsto(\phi(v),v-\phi(v)p)$. The kernel is finite projective: it is the image of the projection $v\mapsto v-\phi(v)p$, so projecting a finite generating list of $P$ generates it; a map from the kernel through a surjection lifts by first extending it using this projection to $P$, applying projectivity, and restricting the lift back to the kernel. If $\phi$ is surjective, choose a preimage $p$ of $1$. These statements also hold for the zero ring, where every unital module is zero and $1=0$. [given, algebra, construct]

1.3 For the affine converse, take a finite generating surjection $q:A^n\to P$. The lifting property of $P$ gives $j:P\to A^n$ with $qj=\operatorname{id}_P$. With $e_i=q(\epsilon_i)$ for the standard basis and $\lambda_i$ the coordinates of $j$, one has $v=\sum_i\lambda_i(v)e_i$ for all $v\in P$. The maps $j,q$ therefore realize $P$ as a direct summand of $A^n$. Put $I=(\lambda_1(p),\ldots,\lambda_n(p))$. At a prime $\mathfrak p$, [F2], [F3] and [F6] identify the fiber of the associated section and the fiber maps of the $\lambda_i$. Its value is zero exactly when all $\lambda_i(p)$ lie in $\mathfrak p$: one direction follows by applying these maps, and the other by reducing the displayed expansion. If the section is nowhere zero, $I$ is therefore contained in no prime. If $I$ were proper then $A\ne0$, so [F4] would give a maximal, hence prime, ideal containing $I$, a contradiction. Hence $I=A$. Choose coefficients $c_i$ with $\sum_i c_i\lambda_i(p)=1$ and set $\phi=\sum_i c_i\lambda_i$; this is a functional with $\phi(p)=1$. For $A=0$ the same conclusion follows from $I=A$ and the unique zero functional. [F1, F2, F3, F4, F6, given, construct]

2.1 Conversely, if $\phi(p)=1$, localization and passage to every residue field send the fiber value of $p$ to $1$ by [F2], [F3] and [F6]; hence that value is nonzero. For the zero ring there are no points by [F3], so this condition is vacuous. On an affine scheme [F1] sheafifies the decomposition in step 1.2 into a trivial line summand and a vector bundle complement. Conversely, such a bundle decomposition gives a module decomposition by [F1], and the image of $1$ and projection to $A$ form a unimodular pair. Together with steps 1.1 through 1.3 this proves all the stated equivalences and splitting. Choice is used in the affine interfaces [F1], [F3] and the ideal-containment theorem [F4]; the local coordinate argument makes only finitely many selections and uses explicit fractions and germs. [F1, F2, F3, F4, F6, step 1.1, step 1.2, step 1.3] ∎
