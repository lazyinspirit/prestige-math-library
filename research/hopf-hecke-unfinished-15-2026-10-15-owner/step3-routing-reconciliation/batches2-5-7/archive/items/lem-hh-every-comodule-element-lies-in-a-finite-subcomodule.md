---
id: lem-hh-every-comodule-element-lies-in-a-finite-subcomodule
kind: lemma
title: "Every comodule element lies in a finite-dimensional subcomodule"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 2
deps: [def-hh-right-comodule-and-comodule-morphism, def-hh-scalar-and-tensor-conventions, lem-hh-tensor-coherence-on-elementary-tensors, lem-hh-coefficient-extension-and-finite-tensor-separation, lem-hh-tensor-injections-quotients-and-kernels-over-a-field, prop-functoriality-of-module-tensor-products, def-axiom-of-choice, def-linear-map, def-linear-combination-and-span, lem-hh-finite-spanning-list-contains-a-basis, def-dimension, def-quotient-module, thm-unique-coordinates-with-respect-to-an-ordered-basis]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: >-
  AC is used only in the arbitrary-dimensional coalgebra branch through the published coefficient-extension/separation and tensor-injection/kernel suppliers. If C is finite-dimensional, the finite-coordinate proof below uses no AC.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Daniel Kongsgaard and UCSD Math 207A, Hopf Algebras Lecture Notes, Spring 2020"
      url: "https://mathweb.ucsd.edu/~drogalsk/207a-s20-lecturenotes.pdf"
      locator: "§1.6, printed pp.11–15; Examples 1.15–1.16, pp.13–14; §§3.3–3.4, printed pp.36–41"
    - title: "William Chin, A Brief Introduction to Coalgebra Representation Theory"
      url: "https://condor.depaul.edu/~wchin/crt.pdf"
      locator: "§2, printed pp.2–3"
---
## Statement

Assume AC. Let $C$ be a coalgebra over a field $k$, let $(M,\rho)$ be a right $C$-comodule, and let $m\in M$. Then $m$ belongs to a finite-dimensional subcomodule of $M$. If $C$ is finite-dimensional, the same conclusion follows without AC.

## Facts & Assumptions

**Given:** A field $k$, a coalgebra $C$ with comultiplication $\Delta$ and counit $\varepsilon$, a right comodule $(M,\rho)$, and $m\in M$.

[F1] The coaction satisfies $(\rho\otimes\operatorname{id}_C)\rho=(\operatorname{id}_M\otimes\Delta)\rho$ and $(\operatorname{id}_M\otimes\varepsilon)\rho=\operatorname{id}_M$. A subcomodule is an injective comodule map, identified with its image after the induced coaction is constructed. ([[def-hh-right-comodule-and-comodule-morphism]])

[F2] Every tensor is a finite sum of elementary tensors, and iterated tensor products are re-associated through the stated associators. ([[def-hh-scalar-and-tensor-conventions]], [[lem-hh-tensor-coherence-on-elementary-tensors]])

[F3] If $c_1,\dots,c_r$ are linearly independent in a vector space $C$ and $\sum_i c_i\otimes x_i=0$, then every $x_i=0$ under AC; if $C$ is finite-dimensional, this coefficient-separation claim is choice-free. ([[lem-hh-coefficient-extension-and-finite-tensor-separation]])

[F4] Under AC, tensoring an injection by $\operatorname{id}_C$ is injective and, for the quotient $\pi:M\to M/W$, $\ker(\pi\otimes\operatorname{id}_C)$ is the image of $W\otimes C$. ([[lem-hh-tensor-injections-quotients-and-kernels-over-a-field]])

[F5] A subspace spanned by a finite list has a finite basis: the list contains a basis of its span, without choice, and a vector space is finite-dimensional exactly when it has a finite basis. ([[lem-hh-finite-spanning-list-contains-a-basis]], [[def-dimension]])

[F6] In a finite-dimensional vector space, after fixing a finite ordered basis, every vector has a unique coordinate list. ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]])

[A1] AC holds for the arbitrary-dimensional branch. ([[def-axiom-of-choice]])

## Proof

**Given:** The objects above; assume [A1] for the general coalgebra case. The separate finite-dimensional-$C$ branch will not use [A1].

1.1 If $m=0$, let $W=\{0\}$ with its zero coaction; both coaction equations are zero equalities, so it is a finite-dimensional subcomodule containing $m$. Otherwise write $\rho(m)=\sum_{s=1}^r x_s\otimes d_s$ as a finite tensor by [F2]. Let $D=\operatorname{span}\{d_1,\dots,d_r\}$. The choice-free basis-extraction result [F5] gives a finite basis $c_1,\dots,c_q$ of $D$; express each $d_s$ in that basis and collect terms to obtain $\rho(m)=\sum_{i=1}^q v_i\otimes c_i$ with the $c_i$ linearly independent. Set $W=\operatorname{span}\{v_1,\dots,v_q\}$, which has a finite basis and is therefore finite-dimensional by [F5]. [given, F1, F2, F5, choose]

2.1 Coassociativity applied to this expansion gives $\sum_i\rho(v_i)\otimes c_i=\sum_i v_i\otimes\Delta(c_i)$. Let $\pi:M\to M/W$ be the quotient and apply $\pi\otimes\operatorname{id}_C\otimes\operatorname{id}_C$; the right side is zero since every $v_i\in W$, so $\sum_i ((\pi\otimes\operatorname{id}_C)\rho(v_i))\otimes c_i=0$ in $((M/W)\otimes C)\otimes C$. [given, F1, F2, step 1.1, construct]

3.1 Apply the associator and symmetry to rewrite the last equality as $\sum_i c_i\otimes((\pi\otimes\operatorname{id})\rho(v_i))=0$. The $c_i$ are independent, so [F3] gives $(\pi\otimes\operatorname{id})\rho(v_i)=0$ for every $i$. By [F4], each $\rho(v_i)$ lies in the image of $W\otimes C\to M\otimes C$. Therefore $\rho(W)$ lies in that image. [A1, F3, F4, step 2.1, algebra]

3.2 Now suppose $C$ is finite-dimensional, without assuming AC. The construction in step 1.1 still gives $W$ and independent $c_i$. Coassociativity and the quotient map give the zero tensor equality of step 2.1. The finite-dimensional clause of [F3] therefore gives $(\pi\otimes\operatorname{id})\rho(v_i)=0$ for each $i$. [F1, F2, F3, F5, step 1.1, step 2.1]

4.1 The inclusion $i:W\hookrightarrow M$ tensored with $C$ is injective by [A1] and [F4]. Hence each $\rho(w)$ for $w\in W$ has a unique lift $\rho_W(w)\in W\otimes C$; uniqueness makes $w\mapsto\rho_W(w)$ linear and $(i\otimes\operatorname{id})\rho_W=\rho i$. The map $i\otimes\operatorname{id}_C\otimes\operatorname{id}_C$ is also injective. Applying it to $(\rho_W\otimes\operatorname{id})\rho_W$ gives $(\rho\otimes\operatorname{id})(i\otimes\operatorname{id})\rho_W=(\rho\otimes\operatorname{id})\rho i$; applying it to $(\operatorname{id}_W\otimes\Delta)\rho_W$ gives $(\operatorname{id}_M\otimes\Delta)(i\otimes\operatorname{id})\rho_W=(\operatorname{id}_M\otimes\Delta)\rho i$. These are equal by coassociativity of $M$, so injectivity proves coassociativity on $W$. Also $i(\operatorname{id}_W\otimes\varepsilon)\rho_W=(\operatorname{id}_M\otimes\varepsilon)(i\otimes\operatorname{id})\rho_W=(\operatorname{id}_M\otimes\varepsilon)\rho i=i$; injectivity of $i$ proves counitality. Thus $(W,\rho_W)$ is a finite-dimensional subcomodule. Finally $m=(\operatorname{id}_M\otimes\varepsilon)\rho(m)=\sum_i v_i\varepsilon(c_i)\in W$ by [F1]. [A1, F1, F4, step 1.1, step 3.1, algebra]

4.2 Since $C$ is finite-dimensional, [F5] and [[def-dimension]] give a finite basis $d_1,\dots,d_t$ of $C$. Write $\lambda_s(c)$ for the unique $s$th coordinate of $c\in C$ from [F6]. For $a,b\in k$ and $c,c'\in C$, uniqueness of coordinates and the vector-space laws give $\lambda_s(ac+bc')=a\lambda_s(c)+b\lambda_s(c')$, so each $\lambda_s$ is linear; write $d_s^*:=\lambda_s$. Write $\rho(v_i)=\sum_s y_s\otimes d_s$. Applying $\pi\otimes\operatorname{id}$ and then $\operatorname{id}\otimes d_s^*$ gives $\pi(y_s)=0$, hence each $y_s\in W$; so $\rho(v_i)$ is in the image of $W\otimes C$. The inclusion $W\otimes C\to M\otimes C$ is injective without AC here: if $\sum_s w_s\otimes d_s$ maps to zero, applying $\operatorname{id}_M\otimes d_s^*$ gives $w_s=0$ for each $s$. Thus the coaction lifts uniquely and linearly to $W$. Writing $i:W\hookrightarrow M$ for the inclusion, expand each elementary tensor in the two finite $C$-coordinates to write any $z\in W\otimes C\otimes C$ as $z=\sum_{s,u}w_{su}\otimes d_s\otimes d_u$ by [F2]. If its image in $M\otimes C\otimes C$ is zero, apply $\operatorname{id}_M\otimes d_s^*\otimes d_u^*$, with the canonical tensor-unit identifications, to obtain $i(w_{su})=0$ for every $s,u$; injectivity of $i$ gives $w_{su}=0$ and hence $z=0$. Thus the threefold inclusion is injective without invoking a product-basis theorem or AC. Applying this inclusion to the two coaction composites on $W$ gives the corresponding composites on $M$, which agree by coassociativity; hence coassociativity holds on $W$. Likewise, applying $W\hookrightarrow M$ to its counit composite gives the identity on $W$ by counitality on $M$, and injectivity gives counitality on $W$. Finally, step 2.1 and counitality directly give $m=(\operatorname{id}_M\otimes\varepsilon)\rho(m)=\sum_i v_i\varepsilon(c_i)\in W$. [F1, F2, F5, F6, step 1.1, step 2.1, step 3.2, algebra]

5.1 Steps 1.1, 2.1, 3.1, and 4.1 prove the arbitrary-$C$ case under AC; steps 2.1, 3.2, and 4.2 prove the finite-dimensional-$C$ case without AC. In both cases the exhibited $W$ is finite-dimensional and is a subcomodule containing $m$. [step 1.1, step 2.1, step 3.1, step 4.1, step 3.2, step 4.2] ∎
