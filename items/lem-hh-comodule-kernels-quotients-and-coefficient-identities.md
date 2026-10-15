---
id: lem-hh-comodule-kernels-quotients-and-coefficient-identities
kind: lemma
title: "Kernels, images, quotients, and matrix coefficients of comodules"
status: published
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 2
deps: [def-hh-right-comodule-and-comodule-morphism, def-hh-scalar-and-tensor-conventions, lem-hh-tensor-coherence-on-elementary-tensors, lem-hh-tensor-injections-quotients-and-kernels-over-a-field, prop-functoriality-of-module-tensor-products, def-axiom-of-choice, def-linear-map, def-kernel-and-image-of-a-linear-map, def-quotient-module, def-submodule, thm-linear-kernel-image-and-injectivity, thm-unique-coordinates-with-respect-to-an-ordered-basis, def-hh-coalgebra-and-coalgebra-map]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: >-
  AC is used through the published tensor-injection and quotient-kernel result to tensor the induced injection M/ker(f)→N and identify ker(q⊗id_C) with ker(f)⊗C; no other arbitrary choice is made in the kernel/image/quotient construction.
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

Let $C$ be a coalgebra over a field $k$. The regular pair $(C,\Delta)$ is a right $C$-comodule. If $f:M\to N$ is a right-comodule map, then $\ker f$ and $\operatorname{im}f$ inherit right-comodule structures, the quotient $M/\ker f$ is a right comodule, and the induced map $M/\ker f\to\operatorname{im}f$ is a comodule isomorphism, assuming AC. For a finite-dimensional right comodule $M$ with ordered basis $v_1,\dots,v_n$, write
$$ \rho(v_j)=\sum_{i=1}^n v_i\otimes c_{ij}. $$
Then
$$ \Delta(c_{ij})=\sum_{\ell=1}^n c_{i\ell}\otimes c_{\ell j}, \qquad \varepsilon(c_{ij})=\delta_{ij}. $$
Conversely, any $n^2$ elements $c_{ij}\in C$ satisfying these two identities define a right-comodule structure on the vector space with basis $v_1,\dots,v_n$ by the displayed formula.

## Facts & Assumptions

**Given:** A field $k$, a coalgebra $C$ with maps $\Delta$ and $\varepsilon$, right $C$-comodules $(M,\rho_M)$ and $(N,\rho_N)$, a right-comodule map $f:M\to N$, and, for the coefficient clause, a finite-dimensional right comodule with a fixed ordered basis.

[F1] A right comodule has a linear map $\rho:X\to X\otimes C$ satisfying $(\rho\otimes\operatorname{id})\rho=(\operatorname{id}\otimes\Delta)\rho$ and $(\operatorname{id}\otimes\varepsilon)\rho=\operatorname{id}$; a map $h:X\to Y$ is a comodule map when $\rho_Yh=(h\otimes\operatorname{id})\rho_X$. ([[def-hh-right-comodule-and-comodule-morphism]])

[F2] A coalgebra has coassociative comultiplication $\Delta:C\to C\otimes C$ and a counit $\varepsilon:C\to k$ for which both counit composites are the identity through the tensor-unit isomorphisms; coalgebra maps preserve both structure maps. ([[def-hh-coalgebra-and-coalgebra-map]])

[F3] The tensor products are over $k$, every tensor is a finite sum of elementary tensors, and tensor powers are re-associated only through the stated associators. ([[def-hh-scalar-and-tensor-conventions]], [[lem-hh-tensor-coherence-on-elementary-tensors]])

[F4] Under AC, tensoring an injective linear map by $\operatorname{id}_V$ remains injective; for quotient maps $p:X\to X/U$ and $q:Y\to Y/Z$, $\ker(p\otimes q)$ is the image of $U\otimes Y+X\otimes Z$ in $X\otimes Y$. ([[lem-hh-tensor-injections-quotients-and-kernels-over-a-field]])

[F5] Tensor maps act on elementary tensors by $(g\otimes h)(x\otimes y)=g(x)\otimes h(y)$ and preserve identities and composition. ([[prop-functoriality-of-module-tensor-products]])

[F6] $\ker f=\{x:f(x)=0\}$ and $\operatorname{im}f=\{f(x):x\in M\}$; these are subspaces for a linear map. ([[def-kernel-and-image-of-a-linear-map]], [[thm-linear-kernel-image-and-injectivity]])

[F7] If $K$ is a submodule, $M/K$ consists of cosets $m+K$ and the quotient map is $q(m)=m+K$. ([[def-submodule]], [[def-quotient-module]])

[F8] For a finite ordered basis, each vector has a unique coordinate list. ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]])

[A1] AC holds, so the tensor-injection and tensor-kernel conclusions in [F4] apply to arbitrary vector spaces. ([[def-axiom-of-choice]])

## Proof

**Given:** The objects and map in the statement, with AC for the arbitrary-dimensional kernel, image, and quotient claims.

1.1 For the regular object take $\rho_C=\Delta$. The coalgebra coassociativity identity is exactly $(\rho_C\otimes\operatorname{id}_C)\rho_C=(\operatorname{id}_C\otimes\Delta)\rho_C$, and its two counit identities give $(\operatorname{id}_C\otimes\varepsilon)\rho_C=\operatorname{id}_C$ (and the other counit identity), so $(C,\Delta)$ is a right comodule by the coalgebra definition [F2]. [given, F1, F2]

1.2 Let $M$ have ordered basis $v_1,\ldots,v_n$, and write $\lambda_i(x)$ for the unique coordinates of $x$ from [F8]. For $a,b\in k$ and $x,y\in M$, the coordinate list of $ax+by$ is $(a\lambda_i(x)+b\lambda_i(y))_i$ by the vector-space laws; uniqueness in [F8] therefore gives $\lambda_i(ax+by)=a\lambda_i(x)+b\lambda_i(y)$, so each coordinate function $\lambda_i:M\to k$ is linear. For each $j$, write $\rho_M(v_j)=\sum_s x_s\otimes d_s$ as a finite tensor by [F3], expand each $x_s=\sum_i\lambda_i(x_s)v_i$, and collect $c_{ij}:=\sum_s\lambda_i(x_s)d_s$. Applying $\lambda_r\otimes\operatorname{id}_C$ recovers $c_{rj}$, so the expansion $\rho_M(v_j)=\sum_i v_i\otimes c_{ij}$ is unique. [given, F3, F5, F8, algebra, choose]

1.3 Let $K=\ker f$, $I=\operatorname{im}f$, and let $q:M\to M/K$ be the quotient. The map $\bar f:M/K\to N$, $\bar f(m+K)=f(m)$, is well-defined and injective: equal cosets have difference in $K$, and $\bar f(m+K)=0$ implies $m\in K$. It is linear because for $a,b\in k$ and cosets represented by $m,n\in M$, $\bar f(a(m+K)+b(n+K))=f(am+bn)=af(m)+bf(n)$. Thus $f=\bar f q$, so functoriality [F5] gives $f\otimes\operatorname{id}_C=(\bar f\otimes\operatorname{id}_C)(q\otimes\operatorname{id}_C)$. By [A1] and [F4], $\bar f\otimes\operatorname{id}_C$ is injective, while the kernel formula in [F4] with $U=K$ and $Z=0$ gives $\ker(q\otimes\operatorname{id}_C)=\operatorname{im}(K\otimes C)$. Therefore $\ker(f\otimes\operatorname{id}_C)=\operatorname{im}(K\otimes C\to M\otimes C)$. The same tensor-injection result makes the inclusion $K\otimes C\to M\otimes C$ injective. [given, A1, F4, F6, F7, F5, algebra]

2.1 Apply coassociativity to $v_j$ and use the expansion in 1.2 to get $\sum_{i,\ell}v_i\otimes c_{i\ell}\otimes c_{\ell j}=\sum_i v_i\otimes\Delta(c_{ij})$. Applying $\lambda_r\otimes\operatorname{id}_C\otimes\operatorname{id}_C$ gives $\Delta(c_{rj})=\sum_\ell c_{r\ell}\otimes c_{\ell j}$. Using the counit equation $(\operatorname{id}_M\otimes\varepsilon)\rho_M(v_j)=v_j$ under the tensor-unit identification and then applying $\lambda_r$ gives $\varepsilon(c_{rj})=\delta_{rj}$. [given, F1, F8, step 1.2, algebra]

2.2 For $x\in K$, the comodule-map equation gives $(f\otimes\operatorname{id})\rho_M(x)=\rho_N(f(x))=0$. By step 1.3, $\rho_M(x)$ has a unique preimage in $K\otimes C$ under the injective map $i\otimes\operatorname{id}$, where $i:K\hookrightarrow M$; define $\rho_K(x)$ to be that preimage. This is linear because it is the inverse of a linear isomorphism onto its image. The identity $(i\otimes\operatorname{id})\rho_K=\rho_Mi$ and the injectivity of $i\otimes\operatorname{id}\otimes\operatorname{id}$ show that coassociativity of $\rho_K$ follows from coassociativity of $\rho_M$; injectivity of $i$ and the same identity show its counit law. Hence $K$ is a subcomodule and $i$ is a comodule map. [step 1.3, F1, F4, F5, algebra]

3.1 Conversely, suppose the displayed matrix identities hold. Define $\rho$ on the basis by $\rho(v_j)=\sum_i v_i\otimes c_{ij}$ and extend linearly using the unique coordinates from [F8]; the coordinate functionals are linear by step 1.2. For each basis vector, $(\rho\otimes\operatorname{id})\rho(v_j)=\sum_{i,\ell}v_i\otimes c_{i\ell}\otimes c_{\ell j}=\sum_i v_i\otimes\Delta(c_{ij})=(\operatorname{id}\otimes\Delta)\rho(v_j)$ by the coproduct identity; also $(\operatorname{id}\otimes\varepsilon)\rho(v_j)=\sum_i v_i\delta_{ij}=v_j$. The maps in each identity are linear and the basis spans $M$, so both identities hold on every vector; hence this is a right comodule. [given, F1, F2, F8, step 1.2, step 2.1, algebra]

3.2 Factor $f$ as $M\xrightarrow{q_I}I\xrightarrow{j}N$, where $I=\operatorname{im}f$ is a subspace by [F6], $q_I(m):=f(m)$ with codomain restricted to $I$ is the linear corestriction of $f$, and $j$ is inclusion. The map $q_I$ is onto by the definition of $I$. Define $\rho_I(q_I(m)):=(q_I\otimes\operatorname{id})\rho_M(m)$. If $q_I(m)=q_I(m')$, then $m-m'\in K$; by 2.2, $\rho_M(m-m')$ lies in the image of $K\otimes C$, which $q_I\otimes\operatorname{id}$ kills, so the formula is well-defined. It is linear and satisfies $\rho_Iq_I=(q_I\otimes\operatorname{id})\rho_M$. Precomposing the coassociativity identity for $\rho_I$ with the surjection $q_I$ gives $(q_I\otimes\operatorname{id}\otimes\operatorname{id})(\rho_M\otimes\operatorname{id})\rho_M=(q_I\otimes\operatorname{id}\otimes\operatorname{id})(\operatorname{id}\otimes\Delta)\rho_M$, so it holds by coassociativity on $M$ and surjectivity of $q_I$. Likewise, precomposing its counit identity with $q_I$ gives $q_I(\operatorname{id}\otimes\varepsilon)\rho_M=q_I$, which holds by counitality on $M$; surjectivity gives the identity on $I$. Thus $\rho_I$ is a coaction. Since $f=j q_I$ is a comodule map, $\rho_Nj q_I=(f\otimes\operatorname{id})\rho_M=(j\otimes\operatorname{id})(q_I\otimes\operatorname{id})\rho_M=(j\otimes\operatorname{id})\rho_I q_I$; surjectivity of $q_I$ proves $\rho_Nj=(j\otimes\operatorname{id})\rho_I$, so $j$ is a comodule map. [step 2.2, F1, F5, F6, algebra]

4.1 Let $i:J_0\to M$ be an injective comodule map and set $J=i(J_0)$. By step 3.2, $J$ has the image coaction making its inclusion a comodule map. Let $\pi:M\to M/J$ be the quotient and set $\bar\rho(m+J):=(\pi\otimes\operatorname{id})\rho_M(m)$. If $m$ is replaced by $m+j$, the difference is $(\pi\otimes\operatorname{id})\rho_M(j)=0$ because $\rho_M(j)$ is the image of a tensor in $J\otimes C$; hence $\bar\rho$ is well-defined. It is linear and $\bar\rho\pi=(\pi\otimes\operatorname{id})\rho_M$. Precomposing its coassociativity identity with the surjection $\pi$ gives $(\pi\otimes\operatorname{id}\otimes\operatorname{id})(\rho_M\otimes\operatorname{id})\rho_M=(\pi\otimes\operatorname{id}\otimes\operatorname{id})(\operatorname{id}\otimes\Delta)\rho_M$, so it holds by coassociativity on $M$ and surjectivity of $\pi$. Precomposing its counit identity with $\pi$ gives $\pi(\operatorname{id}\otimes\varepsilon)\rho_M=\pi$, which follows by counitality on $M$; surjectivity gives the identity on $M/J$. Thus the quotient is a comodule and $\pi$ is a comodule map. [step 2.2, step 3.2, F1, F5, F7, algebra]

5.1 The map $\widetilde f:M/K\to I$, $m+K\mapsto f(m)$, is the same induced map as $\bar f$ with codomain restricted to $I$. It is injective by the definition of $K$ and onto by the definition of $I$, hence is a vector-space isomorphism. The quotient and image coaction formulas in steps 3.2 and 4.1 give $\rho_I\widetilde f=(\widetilde f\otimes\operatorname{id})\bar\rho$. Since $\widetilde f$ and its tensor map are isomorphisms, composing this identity with their inverses shows $\widetilde f^{-1}$ is also a comodule map. [step 3.2, step 4.1, F5, F6, F7, algebra]

6.1 Step 1.1 establishes the regular comodule; steps 1.2, 2.1, and 3.1 prove both directions of the finite coefficient-matrix characterization. Steps 1.3, 2.2, 3.2, 4.1, and 5.1 establish the kernel, image, quotient, and first-isomorphism claims under AC. [step 1.1, step 1.2, step 2.1, step 3.1, step 1.3, step 2.2, step 3.2, step 4.1, step 5.1] ∎
