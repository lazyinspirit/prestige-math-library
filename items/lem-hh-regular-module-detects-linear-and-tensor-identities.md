---
id: lem-hh-regular-module-detects-linear-and-tensor-identities
kind: lemma
title: "The left regular module and its tensor powers detect linear and tensor identities"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 0
deps: [def-algebra-over-a-commutative-ring, def-left-and-right-modules, def-tensor-product-of-modules-by-generators-and-relations, thm-universal-property-of-module-tensor-products, cor-finite-iterated-tensor-products-represent-multilinear-maps, thm-right-exactness-of-tensor-products, def-quotient-ring, thm-quotient-ring-universal-property]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "George M. Bergman, An Invitation to General Algebra and Universal Constructions (Springer Universitext; author's revised PDF v3.4, April 30, 2020)"
      url: "https://math.berkeley.edu/~gbergman/245/3.4.pdf"
      locator: "§9.1–9.3, printed pp. 360–379: generating algebras from below and left universal constructions"
    - title: "Keith Conrad, Tensor products (University of Connecticut expository notes, 60 pp.)"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/tensorprod.pdf"
      locator: "Theorem 3.3, printed p. 10, and Remark 4.17, printed p. 19: spanning by elementary tensors and testing equalities of additive maps on them"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Let $R$ be a commutative ring and let $A$ be a unital $R$-algebra ([[def-algebra-over-a-commutative-ring]]), with $A$ regarded as its left regular module.

1. For $a,b\in A$ one has $a=b$ if and only if $a\cdot1_A=b\cdot1_A$.
2. For $n\ge1$ the tensor power $A^{\otimes n}$ is a left $A$-module via $a\cdot(a_1\otimes\cdots\otimes a_n)=(aa_1)\otimes\cdots\otimes a_n$. If $a\cdot z=b\cdot z$ for all $z\in A^{\otimes n}$, then $a=b$; in particular the single element $1_A^{\otimes n}$ detects equality. The analogous statement holds for the right regular structure. The empty tensor power $A^{\otimes0}=R$ carries no canonical left $A$-module structure here, so no $n=0$ case is claimed.
3. For $n\ge1$, if $f,g:A^{\times n}\to M$ are $R$-multilinear and agree on every $n$-tuple, then the $R$-linear maps $A^{\otimes n}\to M$ they induce ([[cor-finite-iterated-tensor-products-represent-multilinear-maps]]) agree; conversely, agreement of the induced maps gives agreement on all pure tensors $a_1\otimes\cdots\otimes a_n$.
4. Descent warning: if $\pi:A\to A/I$ is a quotient of $R$-algebras ([[thm-quotient-ring-universal-property]]), the induced map $A^{\otimes n}\to(A/I)^{\otimes n}$ is surjective, but an identity between $R$-linear maps out of $(A/I)^{\otimes n}$ may be checked on images of pure tensors of $A$ only after those maps have been shown to be well defined on the quotient; surjectivity alone is not descent.

## Facts & Assumptions

**Given:** A commutative ring $R$, a unital $R$-algebra $A$, an $R$-module $M$ for claim 3, a two-sided ideal $I\subseteq A$, and an integer $n\ge1$.

[F1] A unital $R$-algebra $A$ has a central unital structure map and is a left and right module over itself; for a left $A$-module the action satisfies $1_A\cdot x=x$ and $a\cdot(b\cdot x)=(ab)\cdot x$ ([[def-algebra-over-a-commutative-ring]], [[def-left-and-right-modules]]).

[F2] The tensor product $A\otimes_R\cdots\otimes_RA$ exists with its balanced universal property, every element is a finite sum of elementary tensors, and an $R$-multilinear map out of $A^{\times n}$ induces a unique $R$-linear map out of the $n$-fold tensor power, independently of parenthesization ([[def-tensor-product-of-modules-by-generators-and-relations]], [[thm-universal-property-of-module-tensor-products]], [[cor-finite-iterated-tensor-products-represent-multilinear-maps]]).

[F3] Tensoring a surjective homomorphism is surjective ([[thm-right-exactness-of-tensor-products]]).

[F4] A ring homomorphism whose kernel contains a two-sided ideal factors uniquely through the quotient ring ([[thm-quotient-ring-universal-property]], [[def-quotient-ring]]).

## Proof

**Proof technique:** direct.

1.1 Claim 1: $1_A$ is a two-sided identity of the regular module, so $a=a\cdot1_A$ and $b=b\cdot1_A$ by [F1]; conversely $a\cdot1_A=b\cdot1_A$ is $a=b$. [given, F1]

1.2 Claim 2: for $a\in A$ the map $A^{\times n}\to A^{\otimes n}$, $(a_1,\dots,a_n)\mapsto(aa_1)\otimes a_2\otimes\cdots\otimes a_n$, is $R$-multilinear, so it induces an $R$-linear map $\lambda_a:A^{\otimes n}\to A^{\otimes n}$ with $\lambda_a(a_1\otimes\cdots\otimes a_n)=(aa_1)\otimes a_2\otimes\cdots\otimes a_n$ by [F2]. On elementary tensors $\lambda_a\lambda_b=\lambda_{ab}$, $\lambda_{a+b}=\lambda_a+\lambda_b$ and $\lambda_{1_A}=\operatorname{id}$, and since elementary tensors span [F2], these identities extend to all of $A^{\otimes n}$, so $a\cdot z:=\lambda_a(z)$ makes $A^{\otimes n}$ a left $A$-module [F1]. The $n$-fold multiplication $a_1\otimes\cdots\otimes a_n\mapsto a_1a_2\cdots a_n$ is the $R$-linear map $\mu:A^{\otimes n}\to A$ induced by the $R$-multilinear product [F1, F2], and $\mu(\lambda_a(z))=a\mu(z)$ for elementary tensors and hence for all $z$ by linearity. If $a\cdot z=b\cdot z$ for all $z$, then in particular $\lambda_a(1_A^{\otimes n})=\lambda_b(1_A^{\otimes n})$, that is $a\otimes1_A^{\otimes(n-1)}=b\otimes1_A^{\otimes(n-1)}$; applying $\mu$ gives $a\cdot1_A=b\cdot1_A$, and $a\cdot1_A=a$ while $b\cdot1_A=b$ by [F1], so $a=b$: the single element $1_A^{\otimes n}$ detects equality. The right-handed statement is the mirror computation with $\rho_a(a_1\otimes\cdots\otimes a_n)=a_1\otimes\cdots\otimes(a_na)$. [given, F1, F2, algebra]

1.3 Claim 3: by [F2] the $R$-multilinear map $f$ induces the unique $R$-linear map $\overline f:A^{\otimes n}\to M$ with $\overline f(a_1\otimes\cdots\otimes a_n)=f(a_1,\dots,a_n)$, and likewise for $g$; if $f=g$ as functions then $\overline f$ and $\overline g$ agree on every elementary tensor, hence on the whole tensor power, so $\overline f=\overline g$. Conversely, if $\overline f=\overline g$, then for every tuple $f(a_1,\dots,a_n)=\overline f(a_1\otimes\cdots\otimes a_n)=\overline g(a_1\otimes\cdots\otimes a_n)=g(a_1,\dots,a_n)$, so the multilinear maps agree on all tuples and the induced maps agree on all pure tensors. [given, F2, algebra]

1.4 Claim 4: the quotient map $\pi:A\to A/I$ is a surjective $R$-algebra homomorphism, and $\pi^{\otimes n}:=\pi\otimes\cdots\otimes\pi:A^{\otimes n}\to(A/I)^{\otimes n}$ is surjective by iterated [F3]; it sends an elementary tensor $a_1\otimes\cdots\otimes a_n$ to $\pi(a_1)\otimes\cdots\otimes\pi(a_n)$. If $\overline\varphi:(A/I)^{\otimes n}\to Q$ is an $R$-linear map out of the quotient tensor power, then to check an identity between two such maps on images of pure tensors of $A$ one must first know that each map is well defined on the quotient, equivalently, any proposed map $\varphi:A^{\otimes n}\to Q$ must annihilate $\ker(\pi^{\otimes n})$, so that $\varphi=\overline\varphi\circ\pi^{\otimes n}$ for a well-defined map $\overline\varphi$; that is the descent obligation, and surjectivity of $\pi^{\otimes n}$ alone equips no map out of $A^{\otimes n}$ with a well-defined value on a class. For ring-level descent the quotient universal property [F4] is the tool: a homomorphism killing $I$ factors uniquely through $\pi$. [given, F3, F4, algebra]

2.1 Collecting: step 1.1 proves claim 1, step 1.2 proves both the module structure and the detection statement of claim 2 together with its right-handed mirror, step 1.3 proves both directions of claim 3, and step 1.4 records the descent warning of claim 4. [step 1.1, step 1.2, step 1.3, step 1.4] ∎
