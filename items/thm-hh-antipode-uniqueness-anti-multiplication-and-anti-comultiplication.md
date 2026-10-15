---
id: thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication
kind: theorem
title: "Uniqueness and anti-multiplicativity and anti-comultiplicativity of the antipode"
status: published
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 3
deps: [def-hh-bialgebra-and-bialgebra-map, def-hh-hopf-algebra-and-antipode, def-hh-scalar-and-tensor-conventions, lem-hh-convolution-algebra-associativity-and-unit, lem-hh-tensor-coherence-on-elementary-tensors, lem-hh-tensor-product-coalgebra, prop-functoriality-of-module-tensor-products, thm-tensor-product-of-algebras-over-a-commutative-ring]
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
      locator: "Theorem 1.5(a)–(b), printed pp. 15–16: convolution inverses of multiplication and comultiplication"
    - title: "Pavel Etingof and Mykola Semenyakin, A brief introduction to quantum groups"
      url: "https://arxiv.org/pdf/2106.05252"
      locator: "Proposition 2.2(iii)–(iv), PDF p. 4: anti-homomorphism identities and uniqueness"

---
## Statement

Let $H$ be a Hopf algebra over a field $k$, with antipode $S$, multiplication $m$, unit $u$, comultiplication $\Delta$, and counit $\varepsilon$. Then $S$ is unique, $S(1)=1$, and $\varepsilon\circ S=\varepsilon$. Moreover, for all $a,b\in H$,

$$S(ab)=S(b)S(a),\qquad \Delta(S(h))=(S\otimes S)\tau\Delta(h)\quad(h\in H),$$

where $\tau(x\otimes y)=y\otimes x$ is the tensor flip. In particular, these are consequences of the convolution-inverse definition; they are not extra axioms.

## Facts & Assumptions

**Given:** A Hopf algebra $H$ over $k$, with the structure maps named in the Statement.

[F1] A bialgebra has $\Delta$ and $\varepsilon$ as unital algebra maps, with $(a\otimes b)(c\otimes d)=ac\otimes bd$ ([[def-hh-bialgebra-and-bialgebra-map]]).

[F2] The coalgebra on $H\otimes H$ has $\Delta_{H\otimes H}(a\otimes b)=\sum(a_{(1)}\otimes b_{(1)})\otimes(a_{(2)}\otimes b_{(2)})$ and counit $\varepsilon(a)\varepsilon(b)$ ([[lem-hh-tensor-product-coalgebra]]).

[F3] The algebra on $H\otimes H$ has $(a\otimes b)(c\otimes d)=ac\otimes bd$ and unit $1\otimes1$ ([[thm-tensor-product-of-algebras-over-a-commutative-ring]]).

[F4] On $\operatorname{Hom}_k(C,A)$, convolution is $f*g=m_A(f\otimes g)\Delta_C$, it is associative, and its unit is $u_A\varepsilon_C$ ([[lem-hh-convolution-algebra-associativity-and-unit]]).

[F5] The antipode equations are $S*\mathrm{id}_H=u\varepsilon=\mathrm{id}_H*S$ ([[def-hh-hopf-algebra-and-antipode]]).

[F6] Tensor products of linear maps and the flip are well-defined, and reassociation of the iterated tensor products is coherent ([[prop-functoriality-of-module-tensor-products]], [[lem-hh-tensor-coherence-on-elementary-tensors]]).

[F7] Tensor powers use the stated canonical tensor-unit and associator identifications ([[def-hh-scalar-and-tensor-conventions]]).

## Proof

**Proof technique:** direct.

1.1 If $p,q$ are two two-sided convolution inverses of the same map $r$ in a unital associative convolution algebra with unit $e$, then $p=p*(r*q)=(p*r)*q=e*q=q$. Taking $r=\mathrm{id}_H$ proves uniqueness of the antipode. [given, F4, F5, algebra]

1.2 Give $\operatorname{Hom}_k(H\otimes H,H)$ convolution using the coalgebra of [F2] and the algebra of $H$. Define $\phi=S\circ m$ and $\psi=m\circ(S\otimes S)\circ\tau$, which are well-defined by [F6]; thus $\psi(a\otimes b)=S(b)S(a)$. Both are two-sided inverses of $m$: $(\phi*m)(a\otimes b)=\sum S(a_{(1)}b_{(1)})a_{(2)}b_{(2)}=\varepsilon(a)\varepsilon(b)1$ and $(m*\phi)(a\otimes b)=\sum a_{(1)}b_{(1)}S(a_{(2)}b_{(2)})=\varepsilon(a)\varepsilon(b)1$ by the antipode equations at $ab$, multiplicativity of $\Delta$, and multiplicativity of $\varepsilon$; also $(\psi*m)(a\otimes b)=\sum S(b_{(1)})S(a_{(1)})a_{(2)}b_{(2)}=\varepsilon(a)\varepsilon(b)1$ and $(m*\psi)(a\otimes b)=\sum a_{(1)}b_{(1)}S(b_{(2)})S(a_{(2)})=\varepsilon(a)\varepsilon(b)1$ by first contracting $S(a_{(1)})a_{(2)}$ or $b_{(1)}S(b_{(2)})$ and then the remaining antipode pair. The right side is the convolution unit on $H\otimes H$ by [F2]. [given, F1, F2, F4, F5, F6, algebra]

1.3 Give $\operatorname{Hom}_k(H,H\otimes H)$ convolution using $\Delta$ on the source and the tensor-product algebra on the target. The map $\Phi=\Delta\circ S$ is a two-sided inverse of $\Delta$: $(\Phi*\Delta)(h)=\sum\Delta(S(h_{(1)}))\Delta(h_{(2)})=\Delta(\sum S(h_{(1)})h_{(2)})=\varepsilon(h)(1\otimes1)$ and $(\Delta*\Phi)(h)=\sum\Delta(h_{(1)})\Delta(S(h_{(2)}))=\Delta(\sum h_{(1)}S(h_{(2)}))=\varepsilon(h)(1\otimes1)$ by multiplicativity of $\Delta$ and the two antipode equations. Here the convolution unit is $h\mapsto\varepsilon(h)(1\otimes1)$. [given, F1, F3, F4, F5, algebra]

1.4 Define $\Psi:=(S\otimes S)\tau\Delta:H\to H\otimes H$. Parenthesize the coassociative fourfold coproduct using [F7] as $\sum h_{(1)}\otimes (h_{(2)})_{(1)}\otimes(h_{(2)})_{(2)}\otimes h_{(3)}$. In $\Psi*\Delta$, the adjacent middle product is $S((h_{(2)})_{(1)})(h_{(2)})_{(2)}$, so the left antipode equation and then the counit equation give $(\Psi*\Delta)(h)=\sum S(h_{(2)})h_{(3)}\otimes S(h_{(1)})h_{(4)}=\sum 1\otimes S(h_{(1)})h_{(2)}=\varepsilon(h)(1\otimes1)$. In $\Delta*\Psi$, the adjacent middle product is $(h_{(2)})_{(1)}S((h_{(2)})_{(2)})$, so the right antipode equation and then the counit equation give $(\Delta*\Psi)(h)=\sum h_{(1)}S(h_{(4)})\otimes h_{(2)}S(h_{(3)})=\sum h_{(1)}S(h_{(2)})\otimes1=\varepsilon(h)(1\otimes1)$. The tensor maps are well-defined by [F6], and coassociativity makes these contractions independent of the chosen Sweedler expression. [given, F2, F4, F5, F6, F7, algebra]

2.1 Two-sided convolution inverses are unique by the calculation in step 1.1, applied with common map $m$ in $\operatorname{Hom}_k(H\otimes H,H)$. Thus $\phi=\psi$ and $S(ab)=S(b)S(a)$. Evaluating $S*\mathrm{id}_H=u\varepsilon$ at $1$ and using $\Delta(1)=1\otimes1$, $\varepsilon(1)=1$ gives $S(1)=1$. [step 1.1, step 1.2, F1, F5, algebra]

2.2 Uniqueness of the two-sided inverse of $\Delta$ in this convolution algebra, by step 1.1, gives $\Phi=\Psi$, which is the asserted anti-comultiplication identity. [step 1.1, step 1.3, step 1.4, F4]

3.1 Since $\varepsilon$ is an algebra map, applying it to $\sum S(h_{(1)})h_{(2)}=\varepsilon(h)1$ gives $(\varepsilon\circ S)*\varepsilon=\varepsilon$ in $\operatorname{Hom}_k(H,k)$. The convolution unit there is $\varepsilon$, so $\varepsilon\circ S=\varepsilon$. Together with steps 1.1 and 2.1, this proves all assertions. [step 1.1, step 2.1, F1, F4, F5] ∎
