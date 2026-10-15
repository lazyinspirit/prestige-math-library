---
id: lem-hh-group-and-polynomial-hopf-algebras-exist
kind: lemma
title: "Group algebras, finite-group function algebras, and polynomial Hopf algebras"
status: published
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 3
deps: [def-hh-bialgebra-and-bialgebra-map, def-hh-group-like-and-primitive-elements, def-hh-hopf-algebra-and-antipode, def-free-module-on-a-set-and-standard-basis, lem-hh-free-associative-ring-and-relations-descent, lem-hh-finite-polynomial-and-localization-constructions, lem-hh-tensor-coherence-on-elementary-tensors, prop-functoriality-of-module-tensor-products, thm-tensor-product-basis-from-bases, thm-tensor-product-of-algebras-over-a-commutative-ring, thm-universal-property-of-free-modules, thm-universal-property-of-module-tensor-products]
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass

sources:
  references:
    - title: "Hans-Jürgen Schneider, Lectures on Hopf algebras, notes by Sonia Natale"
      url: "https://www.famaf.unc.edu.ar/~andrus/papers/Schn1.pdf"
      locator: "§1, printed pp. 2–8: group-algebra, symmetric/tensor-algebra, and primitive-generator examples"
    - title: "Pavel Etingof and Mykola Semenyakin, A brief introduction to quantum groups"
      url: "https://arxiv.org/pdf/2106.05252"
      locator: "§2.1.2–2.2.2, PDF pp. 2–5: finite-group function algebras, group algebras, and primitive elements"
    - title: "Thomas Rüd, Hopf Algebras and rooted trees, Practical work in mathematics"
      url: "https://math.mit.edu/~rud/TeXthings/HopfAlgebras-1.1.pdf"
      locator: "§2.4, PDF pp. 11–13: group-algebra bialgebra and Hopf examples"

---
## Statement

Let $k$ be any field.

1. For any group $G$, the vector space $kG$ of finite sums $\sum_{g\in G}a_g g$ is a Hopf algebra. Its multiplication is the bilinear extension of the group law, its unit is the group identity $e$, and
   $$\Delta(g)=g\otimes g,\qquad \varepsilon(g)=1,\qquad S(g)=g^{-1}\quad(g\in G).$$
2. For any finite group $G$, the pointwise algebra $k^G$ of all functions $f:G\to k$ is a Hopf algebra with
   $$\Delta(f)(x,y)=f(xy),\qquad \varepsilon(f)=f(e),\qquad S(f)(x)=f(x^{-1}).$$
   The finite-set tensor identification $k^G\otimes k^G\cong k^{G\times G}$ is used to define $\Delta$. No Hopf structure on the full function space $k^G$ for infinite $G$ is claimed.
3. The polynomial algebra $k[x]$ is a Hopf algebra with
   $$\Delta(x)=x\otimes1+1\otimes x,\qquad \varepsilon(x)=0,\qquad S(x)=-x.$$
   These formulas work in every characteristic. The element $x$ is primitive in every characteristic, and in characteristic $p>0$ so is $x^p$.

## Facts & Assumptions

**Given:** A field $k$, a group $G$, and, in the function-algebra clause, the additional hypothesis that $G$ is finite.

[F1] The free $k$-module on a set has the indicated basis and unique finite coefficient expressions, and maps on the basis extend uniquely linearly ([[def-free-module-on-a-set-and-standard-basis]], [[thm-universal-property-of-free-modules]]).

[F2] The polynomial algebra is free on its monomials, and a chosen image of its generator extends uniquely to an algebra map ([[lem-hh-finite-polynomial-and-localization-constructions]]).

[F3] The elementary tensors from two bases form a basis of their tensor product ([[thm-tensor-product-basis-from-bases]]).

[F4] The tensor product algebra has $(a\otimes b)(c\otimes d)=ac\otimes bd$ ([[thm-tensor-product-of-algebras-over-a-commutative-ring]]).

[F5] The bialgebra conditions are that the algebra and coalgebra structures satisfy the stated structure-map compatibility ([[def-hh-bialgebra-and-bialgebra-map]]).

[F6] An antipode is a two-sided convolution inverse of the identity ([[def-hh-hopf-algebra-and-antipode]]).

[F7] Associators and unit identifications on iterated tensor products are coherent ([[lem-hh-tensor-coherence-on-elementary-tensors]]).

[F8] Tensor products of linear maps are well-defined and functorial ([[prop-functoriality-of-module-tensor-products]]).

[F9] A bilinear pairing induces a unique linear map out of the tensor product ([[thm-universal-property-of-module-tensor-products]]).

[F10] For a set $G$, a map from the generators of the free associative algebra $k\langle G\rangle$ to a unital associative $k$-algebra extends uniquely to a unital algebra homomorphism ([[lem-hh-free-associative-ring-and-relations-descent]]).

[F11] If such a homomorphism kills a set of relations $E$, it factors uniquely through the presented quotient $k\langle G\rangle/(E)$ ([[lem-hh-free-associative-ring-and-relations-descent]]).

[F12] In a coalgebra, $g$ is group-like when $\Delta(g)=g\otimes g$ and $\varepsilon(g)=1$, and $z$ is primitive relative to a specified group-like $g$ when $\Delta(z)=z\otimes g+g\otimes z$ and $\varepsilon(z)=0$; for a bialgebra the usual primitive condition uses its group-like unit ([[def-hh-group-like-and-primitive-elements]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], $kG$ is the free vector space with basis $G$. The group product on basis elements extends to the bilinear pairing $(\sum a_g g,\sum b_hh)\mapsto\sum a_gb_h(gh)$, with finite output support; [F9] gives its multiplication map on $kG\otimes kG$. Associativity follows on basis triples from $(gh)r=g(hr)$ and then on all finite sums by bilinearity, while $e$ is a two-sided unit. Define $\Delta$ and $\varepsilon$ by their displayed values on this basis and extend linearly. [given, F1, F9, construct]

1.2 By [F2] and [F4], the assignments $x\mapsto x\otimes1+1\otimes x$ and $x\mapsto0$ extend uniquely to algebra maps $\Delta:k[x]\to k[x]\otimes k[x]$ and $\varepsilon:k[x]\to k$. The induced maps $\Delta\otimes\mathrm{id}$ and $\mathrm{id}\otimes\Delta$ are algebra maps by [F4], [F8], with their codomains identified by the coherent associators [F7]. Both iterated coproduct maps send $x$ to $x\otimes1\otimes1+1\otimes x\otimes1+1\otimes1\otimes x$ and send $1$ to $1$, so they agree by the universal property [F2]; likewise each counit composite and $\mathrm{id}_{k[x]}$ agree on $x$ and $1$. Thus $k[x]$ is a bialgebra. [given, F2, F4, F5, F7, F8, construct]

1.3 Suppose now that $G$ is finite. The point masses $\delta_g$ form a basis of $k^G$, and [F3] identifies the basis $\delta_x\otimes\delta_y$ with the point-mass basis of $k^{G\times G}$. Thus the formula $\Delta(f)(x,y)=f(xy)$ defines a linear map into $k^G\otimes k^G$. On $(x,y,z)\in G^3$, the two iterated coproducts evaluate to $f((xy)z)$ and $f(x(yz))$, which agree by associativity in $G$, with the two parenthesizations identified by [F7]; the left and right counit composites evaluate to $f(ex)$ and $f(xe)$, both $f(x)$. Pointwise multiplication and evaluation at $e$ make $k^G$ a unital algebra, and $\Delta$ and $\varepsilon$ preserve products and units pointwise, so the bialgebra compatibility holds. [given, F3, F5, F7, algebra]

2.1 In the polynomial bialgebra of step 1.2, the bialgebra conditions [F5] give $\Delta(1)=1\otimes1$ and $\varepsilon(1)=1$, so $1$ is group-like. The formulas for $\Delta(x)$ and $\varepsilon(x)$ in the Statement and [F12] therefore show that $x$ is primitive relative to this unit in every characteristic. [given, step 1.2, F5, F12]

2.2 Write $x_g$ for the generator indexed by $g$ in the free associative algebra $k\langle G\rangle$ and let $E=\{1-x_e\}\cup\{x_gx_h-x_{gh}:g,h\in G\}$, where $gh$ in the subscript is the group product. Set $Q:=k\langle G\rangle/(E)$. The assignment $x_g\mapsto g$ extends to an algebra map $k\langle G\rangle\to kG$ by [F10]; it kills $E$ because $e$ is the unit and the multiplication in step 1.1 extends the group law. By [F11] it descends to $\bar\phi:Q\to kG$. Define $\psi:kG\to Q$ linearly by $\psi(g)=[x_g]$. It is unital since $[x_e]=1_Q$, and it preserves basis products because $[x_g][x_h]=[x_{gh}]=\psi(gh)$ by the relations; bilinearity makes it an algebra map. The composite $\bar\phi\psi$ fixes every basis vector of $kG$, so it is the identity. The maps $\psi\bar\phi$ and $\mathrm{id}_Q$ agree on the generator classes $[x_g]$; uniqueness in [F10]–[F11] gives their equality. Thus the quotient presentation descends to the explicitly constructed group algebra of step 1.1. [given, F10, F11, step 1.1, construct]

2.3 Define $S(x^n)=(-1)^n x^n$ linearly. Put $X=x\otimes1$ and $Y=1\otimes x$; they commute in the tensor-product algebra, and $\Delta(x^n)=(X+Y)^n$ because $\Delta$ is an algebra map. For commuting $X,Y$, induction gives $(X+Y)^n=\sum_{j=0}^n\binom njX^jY^{n-j}$: the case $n=0$ is $1$, and multiplication by $X+Y$ proves the next case by collecting coefficients and using Pascal's identity $\binom nj+\binom n{j-1}=\binom{n+1}j$ (which follows from the factorial formula, with out-of-range binomial coefficients set to zero). Thus $\Delta(x^n)=\sum_{j=0}^n\binom nj x^j\otimes x^{n-j}$. Both antipode products on $x^n$ equal $x^n\sum_{j=0}^n\binom nj(-1)^j=(1-1)^n x^n$, which is $1$ for $n=0$ and $0$ for $n>0$; these are exactly $u\varepsilon(x^n)$. Monomials form a basis, so linearity proves both equations for every polynomial, in every characteristic. This proves the Hopf assertion by [F6]. [step 1.2, F2, F4, F6, algebra]

2.4 Define $S(f)(x)=f(x^{-1})$. Evaluating the two antipode products at $x\in G$ gives $\Delta(f)(x^{-1},x)=f(e)$ and $\Delta(f)(x,x^{-1})=f(e)$: evaluation after $m(S\otimes\mathrm{id})$ or $m(\mathrm{id}\otimes S)$ is respectively evaluation of the function on $G\times G$ at $(x^{-1},x)$ or $(x,x^{-1})$. Both are the constant function $u\varepsilon(f)$, proving the two equations and the Hopf assertion by [F6]. [step 1.3, F3, F6, algebra]

3.1 Let $\operatorname{char}k=p>0$. The integer $p$ is prime: if $p=ab$ with $1<a,b<p$, minimality of the characteristic makes $a1_k$ and $b1_k$ nonzero, but their product is $p1_k=0$, impossible in a field. For $0<j<p$, the factorial formula gives $j\binom pj=p\binom{p-1}{j-1}$; since $j$ is invertible modulo the prime $p$, reducing this identity modulo $p$ shows $p$ divides $\binom pj$. By step 2.3, these intermediate coefficients vanish in $k$, while the endpoint terms give $\Delta(x^p)=x^p\otimes1+1\otimes x^p$. Since $\varepsilon$ is an algebra map in this bialgebra and $\varepsilon(x)=0$, $\varepsilon(x^p)=\varepsilon(x)^p=0$. By step 2.1 and [F12], $x^p$ is primitive relative to the group-like unit $1$. [given, step 1.2, step 2.1, step 2.3, F5, F12, algebra]

3.2 For each basis element $g$, both iterated coproducts equal $g\otimes g\otimes g$ under the coherent associator [F7], and both counit contractions equal $g$. On basis pairs $g,h$, $\Delta(gh)=gh\otimes gh=(g\otimes g)(h\otimes h)$ and $\varepsilon(gh)=1=\varepsilon(g)\varepsilon(h)$; also $\Delta(e)=e\otimes e$ and $\varepsilon(e)=1$. Bilinear or linear extension gives the bialgebra axioms of [F5] on all of $kG$. [step 1.1, step 2.2, F4, F5, F7, algebra]

4.1 Extend $S(g)=g^{-1}$ linearly. On each basis element, $m(S\otimes\mathrm{id})\Delta(g)=g^{-1}g=e=u\varepsilon(g)$ and $m(\mathrm{id}\otimes S)\Delta(g)=gg^{-1}=e=u\varepsilon(g)$. Each side is linear in $g$, so the two equations hold for every finite sum, proving the Hopf assertion by [F6]. [step 1.1, step 3.2, F6, algebra]

5.1 Steps 1.1, 2.2, 3.2 and 4.1 verify the group-algebra structure, its quotient presentation, bialgebra equations and antipode; steps 1.2, 2.1, 2.3 and 3.1 verify the polynomial bialgebra, its characteristic-dependent primitive elements and antipode; steps 1.3 and 2.4 verify the finite-group function bialgebra and antipode. The finite group hypothesis is used precisely for $k^G\otimes k^G\cong k^{G\times G}$ in step 1.3; no such identification is asserted for infinite $G$. [step 1.1, step 2.2, step 3.2, step 4.1, step 1.2, step 1.3, step 2.1, step 2.3, step 3.1, step 2.4, F3] ∎

