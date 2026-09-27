---
id: "lem-ag-differentials-localization-base-change"
kind: "lemma"
title: "Localization, base change and functoriality of differentials"
status: draft
origin: "pipeline"
deps: ["lem-ag-differentials-universal-property", "thm-localisation-of-modules-is-tensor-product", "thm-coproduct-property-of-tensor-products-of-commutative-algebras"]
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stacks Algebra 10.131.8, 12"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
    - title: "Vakil §§22.2.K–L, pp.583–584"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Statement

Let $A\to B$ be a homomorphism of commutative rings, with universal derivation $\mathrm{d}$ of $\Omega_{B/A}$.

1. **(Base change.)** Let $A\to A'$ be a ring homomorphism and put $B'=B\otimes_AA'$. Then there is a $B'$-module isomorphism
$$B'\otimes_B\Omega_{B/A}\;\cong\;\Omega_{B'/A'},\qquad (b\otimes a')\otimes\mathrm{d}b''\longmapsto (b\otimes a')\,\mathrm{d}(b''\otimes1),$$
which is natural in the base-change data.
2. **(Localization.)** Let $U\subseteq B$ be multiplicative and let $V\subseteq A$ be multiplicative with the image of $V$ in $B$ contained in $U$. Then there is a $(U^{-1}B)$-module isomorphism
$$U^{-1}\Omega_{B/A}\;\cong\;\Omega_{U^{-1}B/V^{-1}A}.$$
3. **(Functoriality.)** For an arbitrary $A$-algebra homomorphism $B\to C$ the $A$-derivation $b\mapsto\mathrm{d}(1\otimes b)$ of $B$ into $\Omega_{C/A}$ induces a canonical $C$-linear map
$$C\otimes_B\Omega_{B/A}\longrightarrow\Omega_{C/A}.$$
For a general algebra map $B\to C$ this map is neither asserted injective nor asserted an isomorphism.

## Facts & Assumptions

**Given:** A ring homomorphism $A\to B$ of commutative rings with universal derivation $\mathrm{d}$ of $\Omega_{B/A}$.

[F1] [[lem-ag-differentials-universal-property]]: for every $B$-module $M$, the assignment $g\mapsto g\circ\mathrm{d}$ is an isomorphism $\operatorname{Hom}_B(\Omega_{B/A},M)\cong\operatorname{Der}_A(B,M)$, natural in $M$.

[F2] [[thm-coproduct-property-of-tensor-products-of-commutative-algebras]]: for commutative $R$-algebras $A,B,C$ and $R$-algebra maps $f\colon A\to C$, $g\colon B\to C$ there is a unique $R$-algebra map $h\colon A\otimes_RB\to C$ with $h(a\otimes1)=f(a)$ and $h(1\otimes b)=g(b)$; so $B\otimes_AA'$ carries the $A'$-algebra structure with structure maps $b\mapsto b\otimes1$, $a'\mapsto1\otimes a'$.

[F3] [[thm-localisation-of-modules-is-tensor-product]]: for a commutative ring $R$, multiplicative $S\subseteq R$ and an $R$-module $M$, the map $(S^{-1}R)\otimes_RM\to S^{-1}M$, $(a/s)\otimes m\mapsto am/s$, is an isomorphism with inverse $m/s\mapsto(1/s)\otimes m$.

## Proof

1.1 For (1), let $D\colon B'\to B'\otimes_B\Omega_{B/A}$ be given on the generating tensors of $B'=B\otimes_AA'$ by $D(b\otimes a'):=a'\cdot(1\otimes\mathrm{d}b)$. This is a well-defined additive map by the defining property of the tensor product of $A$-modules, since $(b,a')\mapsto a'(1\otimes\mathrm{d}b)$ is $A$-balanced, and it satisfies Leibniz because $(b\otimes a')(b''\otimes a'')=bb''\otimes a'a''$ and $\mathrm{d}(bb'')=b\,\mathrm{d}b''+b''\,\mathrm{d}b$; it is $A'$-constant since $D(1\otimes a')=a'(1\otimes\mathrm{d}1)=0$ and $A'$-linear as the written scalar action shows, the $A'$-algebra structure on $B'$ being the one of [F2]. By [F1] for the $A'$-algebra $B'$ there is a $B'$-linear $\psi\colon\Omega_{B'/A'}\to B'\otimes_B\Omega_{B/A}$ with $\psi(\mathrm{d}(b\otimes a'))=a'(1\otimes\mathrm{d}b)$. In the other direction $b\mapsto\mathrm{d}(b\otimes1)$ is an $A$-derivation of $B$ into the $B$-module $\Omega_{B'/A'}$, so [F1] gives a $B$-linear $\Omega_{B/A}\to\Omega_{B'/A'}$, and extension of scalars gives the $B'$-linear $\varphi\colon B'\otimes_B\Omega_{B/A}\to\Omega_{B'/A'}$ displayed in the statement. Both composites are $B'$-linear and fix the generators: $\varphi\psi(\mathrm{d}(b\otimes a'))=\varphi(a'(1\otimes\mathrm{d}b))=a'\,\mathrm{d}(b\otimes1)=\mathrm{d}(b\otimes a')$, using $\mathrm{d}(1\otimes a')=0$ and Leibniz; and $\psi\varphi((b\otimes a')\otimes\mathrm{d}b'')=\psi((b\otimes a')\mathrm{d}(b''\otimes1))=(b\otimes a')(1\otimes\mathrm{d}b'')=(b\otimes a')\otimes\mathrm{d}b''$. Hence $\varphi$ and $\psi$ are mutually inverse and $\varphi$ is the isomorphism of (1). [F1, F2, algebra]

1.2 For (2), write $B_U:=U^{-1}B$ and let $D\colon B_U\to U^{-1}\Omega_{B/A}$ be $D(b/u):=(1/u)\mathrm{d}b-(b/u^{2})\mathrm{d}u$, an element of $U^{-1}\Omega_{B/A}$. This is well defined: if $b/u=b'/u'$ in $B_U$, there is $w\in U$ with $wx=0$ for $x:=bu'-b'u$, and applying $\mathrm{d}$ to $wx=0$ gives $w\,\mathrm{d}x=-x\,\mathrm{d}w$; multiplying by $u^{2}u'^{2}$ and writing $G:=u'^{2}(u\,\mathrm{d}b-b\,\mathrm{d}u)-u^{2}(u'\,\mathrm{d}b'-b'\,\mathrm{d}u')$, this yields $wG=-x\,(uu'\,\mathrm{d}w+wu\,\mathrm{d}u'+wu'\,\mathrm{d}u)$. In $U^{-1}\Omega_{B/A}$ the class of $x$ is zero, because $wx=0$ and $w$ becomes invertible, so the class of $wG$ is zero; since $w$ also becomes invertible as a scalar, the class of $G$ is zero, which is exactly $D(b/u)=D(b'/u')$. The map $D$ is additive and kills $V^{-1}A$; for the Leibniz rule one uses the relations implied by $\mathrm{d}(uu^{-1})=0$, namely $\mathrm{d}(u^{-1})=-u^{-2}\mathrm{d}u$ inside $U^{-1}\Omega_{B/A}$, after which the product rule for fractions follows from the product rule for $\mathrm{d}$. Hence $D$ is a $V^{-1}A$-derivation and [F1] for the $V^{-1}A$-algebra $B_U$ gives a $B_U$-linear $\psi\colon\Omega_{B_U/V^{-1}A}\to U^{-1}\Omega_{B/A}$ with $\psi(\mathrm{d}(b/u))=D(b/u)$. Conversely $b\mapsto\mathrm{d}(b/1)$ is an $A$-derivation of $B$ into $\Omega_{B_U/V^{-1}A}$, so [F1] gives a $B$-linear $\Omega_{B/A}\to\Omega_{B_U/V^{-1}A}$ with $\mathrm{d}b\mapsto\mathrm{d}(b/1)$, and under the identification $U^{-1}\Omega_{B/A}\cong(U^{-1}B)\otimes_B\Omega_{B/A}$ of [F3] the balanced assignment $(c,\omega)\mapsto c\cdot(\text{image of }\omega)$ yields the $B_U$-linear $\varphi\colon U^{-1}\Omega_{B/A}\to\Omega_{B_U/V^{-1}A}$ with $\varphi((b/u)\mathrm{d}b')=(b/u)\mathrm{d}(b'/1)$. On generators, $\varphi(\psi(\mathrm{d}(b/u)))=\varphi((1/u)\mathrm{d}b-(b/u^{2})\mathrm{d}u)=(1/u)\mathrm{d}(b/1)-(b/u^{2})\mathrm{d}(u/1)=\mathrm{d}(b/u)$, the last equality being the Leibniz rule applied to $b/u=(b/1)(u/1)^{-1}$ together with $\mathrm{d}((u/1)^{-1})=-(u/1)^{-2}\mathrm{d}(u/1)$; and $\psi(\varphi((1/u)\mathrm{d}b))=\psi((1/u)\mathrm{d}(b/1))=(1/u)D(b/1)=(1/u)\mathrm{d}b$. Both composites are module maps fixing generating sets, so they are inverse and $\varphi$ is the isomorphism of (2). [F1, F3, algebra]

2.1 For (3) let $B\to C$ be an $A$-algebra map. The map $b\mapsto\mathrm{d}(1\otimes b)$ from $B$ to the $C$-module $\Omega_{C/A}$ is additive and $A$-constant and satisfies Leibniz, since $b\mapsto1\otimes b$ is a ring homomorphism and $\mathrm{d}$ is an $A$-derivation; here $1\otimes b$ denotes the image of $b$ in $C$ when $C$ is written as a $B$-algebra. So it is an $A$-derivation, [F1] turns it into a $B$-linear map $\Omega_{B/A}\to\Omega_{C/A}$, and extension of scalars along $B\to C$ gives the $C$-linear map of (3). For $C=B\otimes_AA'$, composing this map with the canonical map $\Omega_{C/A}\to\Omega_{C/A'}$ gives the base-change isomorphism of step 1.1: both send $1\otimes\mathrm{d}b$ to $\mathrm{d}(b\otimes1)$. The map before this composition need not be an isomorphism. For $C=U^{-1}B$, step 1.2 with $V=\{1\}$ does identify the functorial map with a localization isomorphism. No injectivity or surjectivity is claimed for a general $B\to C$. [step 1.1, step 1.2, F1, given] ∎
