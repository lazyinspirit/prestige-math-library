---
id: cor-connected-projective-variety-h0-o
kind: corollary
title: "Global functions on geometrically connected and geometrically reduced proper schemes"
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - cor-every-spanning-set-contains-a-basis
  - cor-finite-morphism-proper
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - cor-local-rings-have-only-trivial-idempotents
  - cor-maximal-ideals-are-prime
  - cor-nilradical-as-intersection-of-primes
  - cor-polynomial-ring-over-a-domain-is-a-domain
  - cor-projective-cohomology-finite-dimensional-field
  - cor-spectrum-connected-iff-no-nontrivial-idempotents
  - cor-tensor-product-with-a-quotient-ring
  - def-algebra-over-a-commutative-ring
  - def-affine-scheme-spectrum
  - def-algebraically-closed-field
  - def-algebraic-closure
  - def-artinian-ring
  - def-axiom-of-choice
  - def-base-change-map-cohomology
  - def-coherent-module-scheme
  - def-connected-space
  - def-dimension
  - def-finite-morphism-schemes
  - def-finite-type-finite-presentation-module-sheaf
  - def-field
  - def-germ-of-section
  - def-geometric-fibre
  - def-geometrically-reduced-integral-connected-fibre
  - def-linear-combination-and-span
  - def-locally-finite-type-and-finite-type-morphism
  - def-locally-noetherian-and-noetherian-scheme
  - def-local-ring
  - def-nilradical-and-reduced-ring
  - def-polynomial-evaluation-and-root
  - def-polynomial-ring-over-a-commutative-ring
  - def-presheaf-of-groups-rings-modules
  - def-proper-morphism
  - def-purely-inseparable-extension
  - def-quasi-coherent-module-scheme
  - def-reduced-affine-scheme
  - def-reduction-of-scheme
  - def-scheme
  - def-scheme-theoretic-fibre
  - def-sheaf-cohomology-derived-global-sections
  - ex-ag-field-change-inseparable-thickening
  - ex-fp-t-over-fp-tp-is-purely-inseparable-of-degree-p
  - lem-cohomology-functoriality-sheaf-and-space
  - lem-field-is-noetherian
  - lem-geometric-fibre-choice-independent
  - lem-idempotent-gives-clopen-spectrum-partition
  - lem-proper-cohomology-field-extension
  - lem-section-zero-if-all-germs-zero
  - prop-algebraically-closed-splitting-and-finite-extension-criteria
  - thm-affine-fibre-product-tensor-ring
  - thm-artinian-local-ring-has-nilpotent-maximal-ideal
  - thm-artinian-ring-has-finitely-many-maximal-ideals
  - thm-coherent-sheaves-abelian-noetherian-scheme
  - thm-coproduct-property-of-tensor-products-of-commutative-algebras
  - thm-correspondence-theorem-ideals
  - thm-frobenius-endomorphism-and-finite-field-automorphism
  - thm-global-sections-affine-scheme
  - thm-nilradical-of-artinian-ring-is-nilpotent
  - thm-polynomial-degree-of-a-product-over-a-domain
  - thm-proper-ideal-contained-in-maximal-ideal
  - thm-quotient-ring-universal-property
  - thm-right-exactness-of-tensor-products
  - thm-stalk-structure-sheaf-prime-localization
  - thm-structure-theorem-for-artinian-rings
  - thm-tensor-product-of-algebras-over-a-commutative-ring
  - thm-tensor-products-commute-with-arbitrary-direct-sums
  - thm-unit-isomorphisms-for-module-tensor-products
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Chapter 30, Sections 30.2-30.22 (proper finiteness and flat base change, tag 02KH)"
      url: "https://stacks.math.columbia.edu/download/coherent.pdf"
    - title: "The Stacks Project, Algebra, Section 10.53 (Artinian rings), tag 00J4, and Section 10.166 (conjugation and base change), tags 0381, 0382"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
    - title: "The Stacks Project, Topology, Section 5.7 and Algebra Section 10.22 (connected components of spectra), tag 04PP"
      url: "https://stacks.math.columbia.edu/tag/04PP"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Sections 19.1, 19.6, 19.9, 28.1-28.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Theorem 16.7 and Lemma 14.2"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field
([[def-field]]) and let $X$ be a nonempty scheme proper over $k$
([[def-proper-morphism]]). Fix an algebraic closure $\bar k$ of $k$
([[def-algebraic-closure]]) and put
$X_{\bar k}=X\times_{\operatorname{Spec}k}\operatorname{Spec}\bar k$, the
chosen algebraic-closure fibre of $X\to\operatorname{Spec}k$ at its unique
point ([[def-geometric-fibre]], [[def-scheme-theoretic-fibre]]). Assume that
this fibre is geometrically connected and geometrically reduced in the sense of
[[def-geometrically-reduced-integral-connected-fibre]]: the scheme
$X_{\bar k}$ is connected ([[def-connected-space]]) and reduced
([[def-reduction-of-scheme]]).

Then the unit map $k\to H^0(X,\mathcal O_X)$, $c\mapsto c\cdot1_X$, is an
isomorphism of $k$-algebras
([[def-sheaf-cohomology-derived-global-sections]]); equivalently
$H^0(X,\mathcal O_X)\cong k$ as $k$-algebras.

Geometric reducedness cannot be replaced by reducedness over $k$: if $p$ is a
prime, $k=\mathbb F_p(u)$ is a rational function field and
$L=k[T]/(T^p-u)$ is the purely inseparable degree-$p$ extension
$\mathbb F_p(t)/\mathbb F_p(t^p)$ with $t^p=u$
([[def-purely-inseparable-extension]],
[[ex-fp-t-over-fp-tp-is-purely-inseparable-of-degree-p]]), then
$X=\operatorname{Spec}L$ is nonempty, proper over $k$, reduced and
geometrically connected, but not geometrically reduced, and
$H^0(X,\mathcal O_X)\cong L\neq k$.

## Facts & Assumptions

**Given:** A field $k$ with algebraic closure $\bar k$, a nonempty scheme $X$ proper over $k$ whose geometric fibre $X_{\bar k}=X\times_{\operatorname{Spec}k}\operatorname{Spec}\bar k$ is connected and reduced, and the rings $B=H^0(X,\mathcal O_X)$ and $R=H^0(X_{\bar k},\mathcal O_{X_{\bar k}})$; the Axiom of Choice is declared in the statement.

[F1] Properness unpacked: a proper morphism is separated, of finite type and universally closed, and a morphism of finite type is locally of finite type, so every point of $X$ has an affine open chart $\operatorname{Spec}A$ with $A$ a finitely generated $k$-algebra; the field $k$ is Noetherian and a finitely generated algebra over a Noetherian ring is Noetherian, so these coordinate rings are Noetherian and $X$ is locally Noetherian. ([[def-proper-morphism]], [[def-locally-finite-type-and-finite-type-morphism]], [[lem-field-is-noetherian]], [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]], [[def-locally-noetherian-and-noetherian-scheme]])

[F2] Over a locally Noetherian scheme a quasi-coherent module of finite type is coherent; the structure sheaf is quasi-coherent, being $\widetilde A$ on an affine chart $\operatorname{Spec}A$, and of finite type, being generated by the unit section in the local form of finite generation by finitely many sections. Hence $\mathcal O_X$ is coherent. ([[def-quasi-coherent-module-scheme]], [[def-finite-type-finite-presentation-module-sheaf]], [[def-coherent-module-scheme]], [[thm-coherent-sheaves-abelian-noetherian-scheme]])

[F3] For a field $F$, a scheme $Y$ proper over $F$ and a coherent $\mathcal G$ on $Y$, every $H^q(Y,\mathcal G)$ is a finite-dimensional $F$-vector space and the groups vanish past the length of any finite affine open cover of $Y$; in particular $H^0(Y,\mathcal G)$ is a finite-dimensional $F$-vector space. ([[cor-projective-cohomology-finite-dimensional-field]], [[def-sheaf-cohomology-derived-global-sections]], [[def-dimension]])

[F4] A nonempty scheme has a point $x$, and every point of a scheme has an affine open neighbourhood, so there is an affine open $U\ni x$ with $(U,\mathcal O_X|_U)\cong\operatorname{Spec}A$ and $\mathcal O_X(U)\cong A$; since $\operatorname{Spec}0=\varnothing$, this forces $A\neq0$, so $1_A\neq0$. The restriction map $\rho:\mathcal O_X(X)\to\mathcal O_X(U)$ is a unital ring homomorphism, being a restriction map of the sheaf of rings $\mathcal O_X$, so $\rho(1_X)=1_A\neq0$ and $1_X\neq0$: the ring $H^0(X,\mathcal O_X)$ is nonzero. ([[def-scheme]], [[def-affine-scheme-spectrum]], [[thm-global-sections-affine-scheme]], [[def-presheaf-of-groups-rings-modules]])

[F5] Base change along the field extension $\bar k/k$: the base-change map $\kappa^q:H^q(X,\mathcal O_X)\otimes_k\bar k\to H^q(X_{\bar k},\mathcal O_{X_{\bar k}})$ is an isomorphism for every $q\ge0$, and $X_{\bar k}$ is proper over $\bar k$. It is the $\bar k$-linear extension of the pullback map on cohomology classes, and the pullback map on global sections is a unital ring homomorphism (pullback of structure-sheaf sections is composition of functions); since $B\otimes_k\bar k$ carries a commutative $\bar k$-algebra structure, the degree-zero map $\kappa^0$ is an isomorphism of unital commutative $\bar k$-algebras. ([[lem-proper-cohomology-field-extension]], [[def-base-change-map-cohomology]], [[lem-cohomology-functoriality-sheaf-and-space]], [[thm-tensor-product-of-algebras-over-a-commutative-ring]], [[def-algebra-over-a-commutative-ring]])

[F6] Extension of scalars of a finite-dimensional space: for a finite-dimensional $k$-vector space $V$ with a basis $v_1,\dots,v_n$, the $k$-bilinear map $V\otimes_k\bar k\to\bar k^n$ with $v_i\otimes c\mapsto ce_i$ is an isomorphism, so $\dim_{\bar k}(V\otimes_k\bar k)=\dim_kV$; this uses only the unit and direct-sum compatibilities of the tensor product together with right exactness. ([[def-dimension]], [[cor-every-spanning-set-contains-a-basis]], [[def-linear-combination-and-span]], [[thm-unit-isomorphisms-for-module-tensor-products]], [[thm-tensor-products-commute-with-arbitrary-direct-sums]], [[thm-right-exactness-of-tensor-products]])

[F7] Geometric fibres: for $X\to\operatorname{Spec}k$ the fibre at the unique point $s$ is $X_s=X\times_{\operatorname{Spec}k}\operatorname{Spec}\kappa(s)\cong X$ because $\kappa(s)=k$, so the geometric fibre is $X_{\bar s}=X_s\times_{\operatorname{Spec}k}\operatorname{Spec}\bar k\cong X\times_{\operatorname{Spec}k}\operatorname{Spec}\bar k=:X_{\bar k}$, and the tests for the chosen algebraic closure agree up to isomorphism with those for any other choice. By the convention of that definition, "geometrically connected" and "geometrically reduced" for this fibre mean that $X_{\bar k}$ is connected, respectively reduced, where reducedness of a scheme means that all its local rings have no nonzero nilpotent element. An affine scheme $\operatorname{Spec}A$ is reduced exactly when $A$ is reduced. ([[def-geometric-fibre]], [[def-geometrically-reduced-integral-connected-fibre]], [[def-scheme-theoretic-fibre]], [[lem-geometric-fibre-choice-independent]], [[def-connected-space]], [[def-reduction-of-scheme]], [[def-reduced-affine-scheme]])

[F8] A reduced scheme has a reduced ring of global sections: if $f\in H^0(Y,\mathcal O_Y)$ satisfies $f^n=0$, then each germ $f_y$ is nilpotent; in a reduced scheme the local rings have no nonzero nilpotent element, so $f_y=0$ for every $y$; a section of a sheaf of groups whose germs all vanish is zero. Hence $H^0(Y,\mathcal O_Y)$ has no nilpotent element other than $0$. ([[def-nilradical-and-reduced-ring]], [[def-reduction-of-scheme]], [[def-germ-of-section]], [[lem-section-zero-if-all-germs-zero]])

[F9] Idempotents and connectedness: in a local ring the only idempotents are $0$ and $1$; if $e\in H^0(Y,\mathcal O_Y)$ is idempotent on a scheme $Y$, then every germ $e_y$ in the local ring $\mathcal O_{Y,y}$ is $0$ or $1$, the sets $Y_1=\{y:e_y=1\}$ and $Y_0=\{y:e_y=0\}$ are disjoint with union $Y$, and both are open, since on an affine open $U=\operatorname{Spec}A$ the identification $\mathcal O_{U,\mathfrak p}\cong A_\mathfrak p$ shows $Y_1\cap U=D(e|_U)$ and $Y_0\cap U=D(1-e|_U)$, which are clopen in $U$; if $e\ne0,1$ then both are nonempty, because $Y_1=\varnothing$ forces all germs of $e$ to vanish and hence $e=0$, while $Y_0=\varnothing$ gives $1-e=0$. Consequently a connected scheme has no idempotent global section other than $0$ and $1$, and for a commutative ring $A$ the spectrum $\operatorname{Spec}A$ is connected if and only if $A$ has no idempotents other than $0$ and $1$. ([[cor-local-rings-have-only-trivial-idempotents]], [[lem-idempotent-gives-clopen-spectrum-partition]], [[thm-stalk-structure-sheaf-prime-localization]], [[lem-section-zero-if-all-germs-zero]], [[cor-spectrum-connected-iff-no-nontrivial-idempotents]], [[def-connected-space]])

[F10] Artinian rings and local rings: a finite-dimensional commutative algebra over a field is Artinian, since a strictly descending chain of ideals is a strictly descending chain of subspaces and a strict inclusion of finite-dimensional spaces strictly lowers the dimension; a nonzero commutative ring has a maximal ideal, an Artinian ring has only finitely many maximal ideals, its nilradical is nilpotent, and for a commutative Artinian ring $R\neq0$ with maximal ideals $\mathfrak m_1,\dots,\mathfrak m_r$ the canonical maps $R\to\prod_{j=1}^rR_{\mathfrak m_j}$ and $R\to\prod_{j=1}^rR/\mathfrak m_j^n$ (for $n$ with $\operatorname{Nil}(R)^n=0$) are isomorphisms, with every factor $R/\mathfrak m_j^n$ nonzero because $\mathfrak m_j^n\subseteq\mathfrak m_j\neq R$; a commutative Artinian local ring has nilpotent maximal ideal; a local ring is a nonzero commutative ring with exactly one maximal ideal, which is the set of its nonunits; and a reduced ring has no nilpotent element other than $0$. ([[def-artinian-ring]], [[def-dimension]], [[thm-proper-ideal-contained-in-maximal-ideal]], [[thm-artinian-ring-has-finitely-many-maximal-ideals]], [[thm-nilradical-of-artinian-ring-is-nilpotent]], [[thm-structure-theorem-for-artinian-rings]], [[thm-artinian-local-ring-has-nilpotent-maximal-ideal]], [[def-local-ring]], [[def-nilradical-and-reduced-ring]])

[F11] Algebraically closed fields: a field $F$ is algebraically closed exactly when it has no nontrivial finite extension; every nonconstant polynomial over an algebraically closed field has a root in that field; and the Frobenius map of a field of characteristic $p>0$ is an injective field endomorphism, so $(a+b)^p=a^p+b^p$ and its $n$-fold iterate is $x\mapsto x^{p^n}$. ([[prop-algebraically-closed-splitting-and-finite-extension-criteria]], [[def-algebraically-closed-field]], [[thm-frobenius-endomorphism-and-finite-field-automorphism]])

[F12] Algebras, quotients, affine fibre products and finite morphisms: for commutative $R$-algebras $A,B$ the tensor product $A\otimes_RB$ is a commutative $R$-algebra; tensoring the presentation $k[T]/(f)$ of a quotient with a $k$-algebra $C$ gives $(k[T]/(f))\otimes_kC\cong C[T]/(f)$, by right exactness of the tensor product and $k[T]\otimes_kC\cong C[T]$, and more generally $M\otimes_R(R/I)\cong M/IM$; for affine schemes $\operatorname{Spec}B\times_{\operatorname{Spec}k}\operatorname{Spec}C\cong\operatorname{Spec}(B\otimes_kC)$ and $\Gamma(\operatorname{Spec}A,\mathcal O)\cong A$; and every finite morphism of schemes, meaning over affine opens it is the spectrum of a module-finite algebra, is proper. ([[thm-tensor-product-of-algebras-over-a-commutative-ring]], [[thm-coproduct-property-of-tensor-products-of-commutative-algebras]], [[cor-tensor-product-with-a-quotient-ring]], [[thm-right-exactness-of-tensor-products]], [[thm-affine-fibre-product-tensor-ring]], [[thm-global-sections-affine-scheme]], [[def-finite-morphism-schemes]], [[cor-finite-morphism-proper]])

[F13] The inseparable example: for a prime $p$ the extension $\mathbb F_p(t)/\mathbb F_p(t^p)$ is purely inseparable of degree $p$; writing $u=t^p$ and $k=\mathbb F_p(u)=\mathbb F_p(t^p)$, the element $u$ is not a $p$-th power in $k$ and $L=k[T]/(T^p-u)\cong\mathbb F_p(t)$ is a field with $t^p=u$; and the base-change computation for such a field, $L\otimes_kL\cong L[u]/(u^p)$ with $u\neq0$ and $u^p=0$, exhibits the base change of a nontrivial purely inseparable extension as a nonreduced local ring. ([[ex-fp-t-over-fp-tp-is-purely-inseparable-of-degree-p]], [[ex-ag-field-change-inseparable-thickening]], [[def-purely-inseparable-extension]])

[F14] Polynomials: over a field the polynomial ring $\bar k[Y]$ is an integral domain, and in a polynomial ring over a domain the degree of a product of nonzero polynomials is the sum of the degrees; hence $Y\notin(Y^p)$ for $p\ge2$, because a nonzero multiple $Y^pg$ has degree at least $p>1=\deg Y$. ([[def-polynomial-ring-over-a-commutative-ring]], [[cor-polynomial-ring-over-a-domain-is-a-domain]], [[thm-polynomial-degree-of-a-product-over-a-domain]])

[F15] Nilpotent ideals with field quotient: if $R$ is a commutative ring and $I\subseteq R$ is an ideal with $I^n=0$ for some $n\ge1$ while $R/I$ is a field, then $I$ is a maximal ideal of $R$, and every element of $I$ is nilpotent, hence lies in the nilradical, which is the intersection of all prime ideals, while every maximal ideal is prime; so every maximal ideal contains $I$, making $I$ the unique maximal ideal and $R$ a local ring. Moreover ideals of a quotient ring correspond to ideals containing the kernel, and a unital ring homomorphism out of a polynomial ring is determined by the image of the variable, which identifies $\bar k[Y]/(Y)\cong\bar k$ through evaluation at $0$. ([[thm-correspondence-theorem-ideals]], [[cor-nilradical-as-intersection-of-primes]], [[cor-maximal-ideals-are-prime]], [[thm-quotient-ring-universal-property]], [[def-polynomial-evaluation-and-root]], [[def-local-ring]])

## Proof

**Proof technique:** direct: transfer $H^0$ along the chosen algebraic closure by flat base change, show that the resulting finite-dimensional $\bar k$-algebra is reduced and has no nontrivial idempotents, factor it into local Artinian pieces, and conclude that it is $\bar k$; then exhibit a purely inseparable field extension whose reducedness over the base does not survive the base change, so that the conclusion fails for the weakened hypothesis.

1.1 Setup and finiteness of $B$. By [F1] the proper morphism $X\to\operatorname{Spec}k$ is of finite type with Noetherian affine charts, so $X$ is locally Noetherian, and $\mathcal O_X$ is coherent by [F2]. Applying [F3] to the coherent sheaf $\mathcal O_X$ on the proper $k$-scheme $X$, the ring $B=H^0(X,\mathcal O_X)$ is a finite-dimensional $k$-vector space; since $X$ is nonempty, [F4] gives $B\neq0$, so $\dim_kB\ge1$. [F1, F2, F3, F4]

1.2 The base-changed algebra. Put $R=H^0(X_{\bar k},\mathcal O_{X_{\bar k}})$. By [F5] the degree-zero base-change map $\kappa^0:B\otimes_k\bar k\to R$ is an isomorphism of unital commutative $\bar k$-algebras, so in particular it carries idempotents bijectively to idempotents, and $X_{\bar k}$ is proper over $\bar k$. [F5]

1.3 Finiteness and nonvanishing of $R$. By [F6] applied to the finite-dimensional $k$-space $B$ one has $\dim_{\bar k}(B\otimes_k\bar k)=\dim_kB$, so by 1.2 the ring $R$ is a finite-dimensional commutative $\bar k$-algebra; since $B\neq0$, the tensor product $B\otimes_k\bar k$ is nonzero and hence $R\neq0$. [F6, 1.1, 1.2]

1.4 $R$ is reduced. The geometric fibre $X_{\bar k}$ is reduced by hypothesis, as recorded in [F7]; by [F8] the ring of global sections of a reduced scheme is reduced, so $R$ has no nonzero nilpotent element. [F7, F8]

1.5 $R$ has no nontrivial idempotents. By hypothesis the geometric fibre $X_{\bar k}$ is connected, as recorded in [F7]. If $e\in R$ were an idempotent with $e\neq0$ and $e\neq1$, then by [F9] the sets $\{y:e_y=1\}$ and $\{y:e_y=0\}$ would be two nonempty disjoint open subsets covering $X_{\bar k}$, contradicting connectedness; hence every idempotent of $R$ is $0$ or $1$. [F7, F9]

1.6 The Artinian factorisation. By 1.3 the ring $R$ is finite-dimensional over $\bar k$, hence Artinian by [F10]. Since $R\neq0$, [F10] provides its maximal ideals $\mathfrak m_1,\dots,\mathfrak m_r$, a nonempty finite list, an exponent $n$ with $\operatorname{Nil}(R)^n=0$, and isomorphisms $R\cong\prod_{j=1}^rR_{\mathfrak m_j}\cong\prod_{j=1}^rR/\mathfrak m_j^n$, in which every factor $R/\mathfrak m_j^n$ is nonzero. [F10, 1.3]

1.7 Only one factor. Suppose $r\ge2$. Since each factor $R/\mathfrak m_j^n$ of the product in 1.6 is nonzero, the tuple with a $1$ in the first coordinate and $0$ in all others is a nontrivial idempotent of $\prod_{j=1}^rR/\mathfrak m_j^n$, which under the isomorphism of 1.6 is a nontrivial idempotent of $R$, contradicting 1.5. Therefore $r=1$ and $R\cong R/\mathfrak m_1^n\cong R_{\mathfrak m_1}$. [F10, 1.5, 1.6]

1.8 $R$ is a field. By 1.7 the ring $R$ is isomorphic to the commutative Artinian local ring $R_{\mathfrak m_1}$, whose maximal ideal is nilpotent by [F10]. Since $R$ is reduced by 1.4, that maximal ideal contains no nonzero element and is therefore zero; by [F10] the nonunits of a local ring are exactly the elements of its maximal ideal, so every nonzero element of $R$ is a unit and $R$ is a field. [F10, 1.4, 1.7]

1.9 $R$ is $\bar k$. The unit map makes $R$ a field containing $\bar k$, so $R/\bar k$ is a field extension, finite-dimensional by 1.3; by [F11] the algebraically closed field $\bar k$ has no nontrivial finite extension, so this extension is trivial, the unit map $\bar k\to R$ is an isomorphism, and $\dim_{\bar k}R=1$. [F11, 1.3, 1.8]

1.10 Conclusion. By 1.3 and 1.9, $\dim_kB=\dim_{\bar k}(B\otimes_k\bar k)=\dim_{\bar k}R=1$. The unit map $\eta:k\to B$ is a unital ring homomorphism, so its kernel is an ideal of the field $k$; it is not all of $k$ because $B\neq0$ from 1.1 gives $\eta(1)=1_B\neq0$, so the kernel is zero and $\eta$ is injective; its image is a nonzero $k$-subspace of the one-dimensional $k$-space $B$, hence equals $B$. Therefore $\eta$ is an isomorphism and $H^0(X,\mathcal O_X)\cong k$ as $k$-algebras. [F6, 1.1, 1.3, 1.9]

1.11 The example, setup. Let $p$ be a prime, let $k=\mathbb F_p(u)$ be the rational function field in one variable and let $L=k[T]/(T^p-u)$, so that $u=t^p$ and $L\cong\mathbb F_p(t)$ for the class $t$ of $T$. By [F13] the ring $L$ is a field, $u\notin k^p$, and $L/k$ is the nontrivial purely inseparable extension $\mathbb F_p(t)/\mathbb F_p(t^p)$ of degree $p$; in particular $L\neq k$. Put $X=\operatorname{Spec}L$; then $X$ is nonempty and reduced because $L$ is a field, and $H^0(X,\mathcal O_X)\cong L\neq k$ by [F12]. [F12, F13]

1.12 $X$ is proper over $k$. The ring map $k\to L$ makes $L$ a finite-dimensional $k$-vector space, hence a module-finite $k$-algebra, so $\operatorname{Spec}L\to\operatorname{Spec}k$ is a finite morphism by [F12]; by [F12] every finite morphism of schemes is proper, so $X$ is proper over $k$. [F12, 1.11]

1.13 The geometric fibre. By [F7] and [F12] one has $X_{\bar k}=\operatorname{Spec}(L\otimes_k\bar k)$. By [F12] applied to the presentation $L=k[T]/(T^p-u)$ the tensor product satisfies $L\otimes_k\bar k\cong\bar k[T]/(T^p-u)$; since $\bar k$ is algebraically closed, [F11] provides $b\in\bar k$ with $b^p=u$, and the Frobenius identity of [F11] gives $T^p-u=T^p-b^p=(T-b)^p$ in $\bar k[T]$; substituting $Y=T-b$ yields $L\otimes_k\bar k\cong\bar k[Y]/(Y^p)=:A$. [F7, F11, F12]

1.14 The fibre is a nonreduced local ring. In $A$ the class $u'$ of $Y$ satisfies $u'^p=0$, and $u'\neq0$ because otherwise $Y\in(Y^p)$, which is impossible: a nonzero multiple $Y^pg$ has degree at least $p>1=\deg Y$ by [F14], and $g=0$ gives $Y=0$. Hence $A$ is not reduced, and by [F7] the affine scheme $\operatorname{Spec}A$ is not reduced. Moreover $A$ is local: the ideal $I=(u')$ satisfies $I^p=0$ and $A/I\cong\bar k[Y]/(Y)\cong\bar k$ is a field by [F15], so $I$ is the unique maximal ideal of $A$. [F7, F14, F15, 1.13]

1.15 The fibre is connected. By 1.14 the ring $A$ is local, so its only idempotents are $0$ and $1$ by [F9], and by [F9] the spectrum of a commutative ring is connected exactly when the ring has no idempotents other than $0$ and $1$; hence the geometric fibre $X_{\bar k}=\operatorname{Spec}A$ is connected. [F9, 1.13, 1.14]

1.16 Sharpness. By 1.11 and 1.12 the scheme $X=\operatorname{Spec}L$ is nonempty, reduced and proper over $k$, and by 1.13 and 1.15 it is geometrically connected, while 1.14 shows that its geometric fibre is not reduced, so $X$ is not geometrically reduced; and $H^0(X,\mathcal O_X)\cong L\neq k$. Thus all the hypotheses of the corollary except geometric reducedness hold for $X$, but the conclusion fails; geometric reducedness cannot be replaced by reducedness over $k$. [1.11, 1.12, 1.13, 1.14, 1.15]

2.1 Boundaries and choice accounting. If $X=\varnothing$ then the conclusion would fail because $H^0(\varnothing,\mathcal O)=0$, so the nonemptiness hypothesis is essential and the present statement excludes this case; the zero ring appears in [F4] only as $\operatorname{Spec}0=\varnothing$, and the nonvanishing of $B$ and $R$ in 1.1 and 1.3 is what excludes the empty product decomposition $r=0$ of the structure theorem in 1.6. The case $r=1$ is precisely the conclusion of 1.7, the field $k$ may be $\mathbb F_2$ and the prime $p$ in 1.11 may be $2$, and the one-dimensional algebra $\bar k$ of 1.9 is the case $\dim_kB=1$ of 1.10. The statement imposes no irreducibility, integrality, connectedness of $X$ itself, flatness, reduced-fibre or dimension hypothesis beyond the listed ones, and the example of 1.11-1.16 is a nonreduced geometric fibre over a reduced base scheme, so no hidden reducedness is presupposed in 1.1-1.3. The endpoint of the argument is degree $q=0$ of the base-change isomorphism in 1.2; the boundary $r=1$ against $r\ge2$ is decided in 1.7, and the characteristic-$2$ boundary is covered because the Frobenius identity of [F11] gives $(T-b)^2=T^2-b^2$ there as well. The Axiom of Choice is used exactly through the finiteness corollary [F3], the base-change theorem [F5], the geometric-fibre conventions [F7], the idempotent and connectedness suppliers [F9], the maximal-ideal and structure theorem suppliers [F10], the algebraically-closed criterion [F11] and the properness of finite morphisms [F12]; the tensor computations of 1.13 and 1.14 and the constructions of 1.1-1.16 make no further selection. [F3, F5, F7, F9, F10, F11, F12, 1.1, 1.6, 1.7, 1.9, 1.11, 1.14] ∎
