---
id: lem-arith-theta-extension-splitting-and-isotropic-descent
kind: lemma
title: "Theta extensions, splitting and isotropic descent"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-abelian-variety-over-a-field
  - lem-arith-dual-and-poincare-bundle-finite-field-descent
  - lem-arith-rigidified-line-bundle-descent
  - lem-arith-homogeneous-bundle-vanishing-and-mumford-surjectivity
  - lem-arith-finite-cartier-duality-and-exactness
  - thm-nonaffine-group-scheme-normal-subgroup-quotient
  - lem-faithfully-flat-effective-descent-of-modules-and-algebras
  - thm-nonaffine-abelian-multiplication-finite-faithfully-flat
  - lem-nonaffine-fppf-descent-of-scheme-morphisms
  - lem-fpqc-cover-submersive
  - cor-weak-nullstellensatz-algebraically-closed-coordinate-form
  - thm-faithfully-flat-ring-map-characterisations
  - lem-nonaffine-group-monomorphism-closed-immersion
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "B. Edixhoven, G. van der Geer, B. Moonen, Abelian Varieties (2012), 8.1-8.11 (theta groups, extensions by Gm and descent of line bundles)"
      url: "https://www.van-der-geer.nl/~gerard/AV.pdf"
    - title: "S. Bosch, W. Lutkebohmert, M. Raynaud, Neron Models (1990), 8.1 (rigidified Picard functor and Poincare bundle)"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Statement

Assume AC and DC as inherited from the supplied scheme and cohomology results. Let $A$ be an abelian variety over a field $k$ and let $N$ be an invertible sheaf on $A$, with Mumford homomorphism $\varphi_N:A\to A^\vee$ and $K(N)=\ker\varphi_N$ the closed subgroup scheme of [[lem-arith-homogeneous-bundle-vanishing-and-mumford-surjectivity]].

(a) [theta group] For every finite subgroup scheme $H\subseteq K(N)$ the **theta group** $\Theta(N)_H$ is a central extension of fppf sheaves of groups $0\to\mathbf G_m\to\Theta(N)_H\to H\to0$ whose commutator factors through an alternating bilinear pairing $e_N:H\times H\to\mathbf G_m$. The pairing satisfies $e_{f^*L}=e_L\circ(f,f)$ on subgroups mapped by the homomorphism $f$ into $K(L)$, and $e_{L\otimes M}=e_Le_M$ on subgroups of $K(L)\cap K(M)$; moreover $e_L=1$ whenever $[L]\in\operatorname{Pic}^0$.

(b) [splitting of commutative extensions] Let $k$ be algebraically closed and let $0\to\mathbf G_m\to E\to H\to0$ be an extension of commutative fppf sheaves of groups with $H$ finite commutative. Then the extension splits: there is a homomorphism $H\to E$ with composite $H\to E\to H$ equal to the identity.

(c) [isotropic descent] Let $k$ be algebraically closed, let $H\subseteq K(N)$ be finite and suppose $e_N$ is trivial on $H\times H$. Then $N$ admits an $H$-linearization and descends along the isogeny $f:A\to A/H$: there is a line bundle $L$ on the abelian variety $A/H$ with $f^*L\cong N$.

## Facts & Assumptions

**Given:** AC and DC, an abelian variety $A$ over a field $k$, an invertible sheaf $N$ on $A$ with $\varphi_N:A\to A^\vee$ and $K(N)=\ker\varphi_N$, and a finite subgroup scheme $H\subseteq K(N)$.

[F1] The dual abelian variety and the normalized Poincare bundle exist and satisfy the all-test universal property; the Mumford map is a homomorphism with $\ker\varphi=\operatorname{Pic}^0$ as a sheaf on all tests ([[lem-arith-dual-and-poincare-bundle-finite-field-descent]], [[lem-arith-homogeneous-bundle-vanishing-and-mumford-surjectivity]]).

[F2] Automorphisms of an invertible sheaf are scalars: $\operatorname{Aut}(N)=\mathbf G_m$ as an fppf sheaf, and rigidified line bundles have no nontrivial automorphisms, so the only automorphisms of a translation isomorphism $t_x^*N\to N$ compatible with a fixed trivialization are scalars ([[lem-arith-rigidified-line-bundle-descent]]).

[F3] Cartier duality is an exact contravariant equivalence on finite commutative $k$-group schemes, $\mu_n^D\cong(\mathbb Z/n)_k$, and a finite commutative $H$ of rank $n$ is killed by $n$ ([[lem-arith-finite-cartier-duality-and-exactness]]).

[F4] For a finite subgroup $H$ of a separated finite-type group scheme the quotient $A/H$ exists as an abelian variety and $A\to A/H$ is a faithfully flat $H$-torsor of finite presentation; every homomorphism of finite-type $k$-group schemes with trivial kernel is a closed immersion ([[thm-nonaffine-group-scheme-normal-subgroup-quotient]], [[lem-nonaffine-group-monomorphism-closed-immersion]]).

[F5] Modules and algebras with descent data along faithfully flat maps are effectively descended, and morphisms of schemes descend along fppf covers; an fppf-covering morphism is submersive, so images and open conditions may be checked after the cover ([[lem-faithfully-flat-effective-descent-of-modules-and-algebras]], [[lem-nonaffine-fppf-descent-of-scheme-morphisms]], [[lem-fpqc-cover-submersive]]).

[F6] A nonempty finite scheme over an algebraically closed field has a rational point ([[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]]); for a unit $u$ on a scheme $T$ the finite free cover $T[t]/(t^n-u)$ is faithfully flat and makes $u$ an $n$-th power, so $x\mapsto x^n$ on $\mathbf G_m$ is an fppf epimorphism ([[thm-faithfully-flat-ring-map-characterisations]]).

## Proof

**Proof technique:** direct: build the theta group from translation isomorphisms, split commutative $\mathbf G_m$-extensions of finite groups by finite Cartier duality, and conclude descent of isotropic line bundles along the quotient.

1.1 Define the theta functor $\Theta(N)$ on $k$-schemes by letting $\Theta(N)(T)$ be the set of pairs $(x,\alpha)$ with $x\in A(T)$ and $\alpha:t_x^*N_T\to N_T$ an isomorphism of line bundles on $A_T$, where $t_x:A_T\to A_T$ is translation. The product $(x,\alpha)(y,\beta)=(x+y,\alpha\circ t_x^*\beta)$ makes $\Theta(N)$ a group sheaf for the fppf topology, with unit $(0,\operatorname{id})$; the projection $\pi:\Theta(N)\to A$, $(x,\alpha)\mapsto x$ is a homomorphism onto $K(N)$, as an fppf sheaf: for $x\in K(N)(T)$ the difference $t_x^*N_T\otimes N_T^{-1}$ is pulled back from a line bundle on $T$, which becomes trivial on an fppf cover, and conversely such a local isomorphism makes its rigidified Picard class zero. [F1, given, construct]

1.2 The scalars act on each pair by $\lambda\cdot(x,\alpha)=(x,\lambda\circ\alpha)$, exhibiting $\mathbf G_m\subseteq\Theta(N)$ as a central subgroup with $\pi^{-1}(0)=\mathbf G_m$; conjugation by $(x,\alpha)$ on $\mathbf G_m$ is trivial because $\mathbf G_m$ is commutative, and the commutator $[(x,\alpha),(y,\beta)]=(x,\alpha)(y,\beta)(x,\alpha)^{-1}(y,\beta)^{-1}$ lies in $\pi^{-1}(0)=\mathbf G_m$ since $K(N)$ is commutative. Its value is the scalar $\alpha t_x^*\beta (t_y^*\alpha)^{-1}\,\beta^{-1}$ (with the evident identifications), which depends only on the classes of $\alpha,\beta$ modulo scalars by [F2]; thus it defines a pairing $e_N:K(N)\times K(N)\to\mathbf G_m$, alternating because $[(x,\alpha),(x,\alpha)]=1$, and bilinear because the commutator is multiplicative in each variable. The identity $e_{f^*L}=e_L\circ(f,f)$ is immediate from pullback of automorphisms, $e_{L\otimes M}=e_Le_M$ from the tensor product of automorphisms, and $e_L=1$ for $[L]\in\operatorname{Pic}^0$ since then $K(L)=A$ and the pairing $e_L:A\times A\to\mathbf G_m$ is constant on the complete variety $A$. [F1, F2, given, algebra]

1.3 We prove (b). Let $0\to\mathbf G_m\to E\xrightarrow{\pi}H\to0$ be a commutative extension with $H$ finite commutative of rank $n$, and let $k$ be algebraically closed. Since $H$ is killed by $n$ [F3], the endomorphism $[n]_E$ lands in $\mathbf G_m=\ker\pi$, so $[n]_E$ is a homomorphism $E\to\mathbf G_m$ whose restriction to $\mathbf G_m$ is $t\mapsto t^n$. Let $F=\ker([n]_E:E\to\mathbf G_m)$, a subgroup sheaf of $E$ containing $\mu_n=\mathbf G_m[n]$. For an fppf-local point $h\in H$ lift to $e\in E$; then $[n]_Ee=t\in\mathbf G_m$ and $x\mapsto x^n$ is an fppf epimorphism on $\mathbf G_m$ [F6], so locally $t=s^{-n}$ and $es\in F$ maps to $h$; hence $F\to H$ is an fppf epimorphism with kernel $\mu_n$, i.e. $F$ is a $\mu_n$-torsor over the finite scheme $H$ and is therefore representable and finite. [F3, F6, given, construct]

2.1 Restricting along the closed immersion $H\subseteq K(N)$ gives the central extension $0\to\mathbf G_m\to\Theta(N)_H=\pi^{-1}(H)\to H\to0$ of fppf group sheaves whose commutator is the restriction of $e_N$; this is statement (a). [step 1.2, given, construct]

2.2 By Cartier exactness [F3] the dual $F^D\to(\mu_n)^D\cong\mathbb Z/n$ is an fppf epimorphism of finite commutative group schemes. As $F$ is nonempty finite over the algebraically closed field $k$, it has a rational point, so $F^D(k)\neq\emptyset$, and surjectivity on $k$-points (a morphism of finite type schemes over an algebraically closed field which is fppf surjective is surjective on closed points) provides a character $\chi:F\to\mathbf G_m$ whose restriction to $\mu_n$ is the tautological character. [F3, F6, step 1.3, construct]

3.1 Consider the multiplication morphism $\mu:\mathbf G_m\times F\to E$, $(t,f)\mapsto tf$. It is an fppf epimorphism: for $e\in E$ with $t=[n]_Ee$ and locally $t=s^n$, the element $s^{-1}e$ lies in $F$, so $e=s(s^{-1}e)$; its kernel is $\{(t,f):tf=1\}=\{(s,s^{-1}):s\in\mu_n\}$, so $\mu$ is a $\mu_n$-torsor. The morphism $\psi(t,f)=t\chi(f)$ satisfies $\psi(t\zeta,\zeta^{-1}f)=t\zeta\chi(\zeta)^{-1}\chi(f)=t\chi(f)$ for $\zeta\in\mu_n$, hence is invariant under the kernel and descends along the fppf cover $\mu$ to a morphism $r:E\to\mathbf G_m$ [F5]. On $\mathbf G_m\subset E$ one has $r(t)=t\chi(1)=t$, and $r$ is a homomorphism because $\psi$ is multiplicative and $E$, hence $F$, is commutative. Therefore $E\to\mathbf G_m\times\ker r$, $e\mapsto(r(e),er(e)^{-1})$, is an isomorphism with inverse $(t,u)\mapsto tu$, and $\ker r\to H$ is an isomorphism; the extension splits. [F3, F5, step 2.2, algebra]

4.1 We prove (c). If $e_N$ is trivial on $H\times H$, then every commutator in $\Theta(N)_H$ is trivial, so $\Theta(N)_H$ is commutative; by (b) the extension $0\to\mathbf G_m\to\Theta(N)_H\to H\to0$ splits. A homomorphic section $\sigma:H\to\Theta(N)_H$ assigns to each $h\in H(T)$ an isomorphism $\alpha_h:t_h^*N_T\to N_T$ with $\alpha_{h+h'}=\alpha_h\circ t_h^*\alpha_{h'}$, which is precisely an $H$-linearization of $N$ covering the translation action of $H$ on $A$. [step 2.1, step 3.1, given, construct]

5.1 With this linearization, $N$ is an $H$-equivariant line bundle on the $H$-torsor $f:A\to A/H$ [F4]; the fppf descent equivalence of modules [F5] produces a line bundle $L$ on $A/H$ with $f^*L\cong N$. The descended module is invertible of rank one because $A\to A/H$ is faithfully flat and rank-one local freeness is checked after such base change; this proves (c). [F4, F5, step 4.1, algebra] ∎ 