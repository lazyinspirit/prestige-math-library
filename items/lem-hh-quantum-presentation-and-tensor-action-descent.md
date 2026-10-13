---
id: lem-hh-quantum-presentation-and-tensor-action-descent
kind: lemma
title: "The type-A quantum presentation descends to its coproduct tensor action"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28-six-step
dependency_level: 1
deps: [def-hh-type-a-quantum-tensor-action-for-centralizers, lem-hh-free-associative-ring-and-relations-descent, lem-hh-universal-presentations-and-base-change, def-hh-scalar-and-tensor-conventions, thm-tensor-product-of-algebras-over-a-commutative-ring, lem-hh-tensor-coherence-on-elementary-tensors, thm-unit-isomorphisms-for-module-tensor-products]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof and Mykola Semenyakin, A brief introduction to quantum groups"
      url: "https://arxiv.org/pdf/2106.05252"
      locator: "§4.1, pp. 23–24: quantum Serre presentation; the coproduct descent and tensor formulas below are checked locally"
---

## Statement

For the presented algebra $U_N$ and candidate assignments in [[def-hh-type-a-quantum-tensor-action-for-centralizers]], the matrices on $V_N$ satisfy every defining relation. The coproduct assignments descend to a coassociative algebra homomorphism $\Delta:U_N\to U_N\otimes_FU_N$ and the counit assignments descend to an algebra homomorphism $\epsilon:U_N\to F$ satisfying both counit identities. Consequently every tensor power $V_N^{\otimes n}$ has the action obtained by iterating $\Delta$; all its generator matrices have entries in $\mathbb Z[q,q^{-1}]$.

## Facts & Assumptions

**Given:** $F=\mathbb Q(q)$, $N\ge1$, the algebra presentation and candidate maps in [[def-hh-type-a-quantum-tensor-action-for-centralizers]].

[F1] A free associative algebra modulo the two-sided ideal of its displayed relations is a presented algebra, and assignments descend exactly when they annihilate every defining relation ([[lem-hh-free-associative-ring-and-relations-descent]]).

[F2] The tensor product of algebras has multiplication $(a\otimes b)(c\otimes d)=ac\otimes bd$, and maps agreeing on the displayed generators agree on the presented algebra ([[thm-tensor-product-of-algebras-over-a-commutative-ring]], [[lem-hh-universal-presentations-and-base-change]]).

[F3] For $a_{ij}=2\delta_{ij}-\delta_{i,j+1}-\delta_{i+1,j}$, the defining $L$-weight relations imply $K_iE_jK_i^{-1}=q^{a_{ij}}E_j$ and $K_iF_jK_i^{-1}=q^{-a_{ij}}F_j$; in particular $a_{ij}=a_{ji}$, $a_{ii}=2$, and $a_{ij}=-1$ for adjacent indices.

[F4] The associator $\alpha((a\otimes b)\otimes c)=a\otimes(b\otimes c)$ is natural and satisfies the pentagon and unit triangle ([[lem-hh-tensor-coherence-on-elementary-tensors]]). The unit maps are $\lambda(r\otimes a)=ra$ and $\rho(a\otimes r)=ar$ ([[thm-unit-isomorphisms-for-module-tensor-products]]). These maps are algebra isomorphisms for the tensor-algebra products, as is checked on elementary tensors using [F2].

## Proof

**Given:** The data in [F1]–[F3].

1.1 On $V_N$, each $L_j$ is diagonal and invertible, and the $L_j$ commute. Conjugating the matrix unit $E_i:e_{i+1}\mapsto e_i$ by $L_j$ multiplies its sole nonzero entry by $q^{\delta_{j,i}-\delta_{j,i+1}}$; conjugating $F_i:e_i\mapsto e_{i+1}$ gives the inverse exponent. Also $K_i$ has eigenvalue $q$ on $e_i$, $q^{-1}$ on $e_{i+1}$ and $1$ on every other basis vector, so $(K_i-K_i^{-1})/(q-q^{-1})$ is the diagonal matrix with entries $1,-1,0$ in those positions. Directly, $[E_i,F_j]=0$ for $i\ne j$ and $[E_i,F_i]$ is that diagonal matrix. Products $E_iE_j$ and $E_jE_i$ (and the corresponding $F$ products) both vanish when $|i-j|>1$; $E_i^2=F_i^2=0$, and each middle three-letter Serre product also vanishes because its matrix-unit indices do not compose. Thus every defining relation holds, and the quotient universal property [F1] gives the vector representation. [given, F1, F3, algebra]

1.2 Define $\Delta$ on the free generators by the displayed formulas in [[def-hh-type-a-quantum-tensor-action-for-centralizers]]. The $\Delta(L_j)$ are mutually commuting units with the displayed inverses. Conjugation by $\Delta(L_j)$ gives the required weights on each of the two terms of $\Delta(E_i)$ and $\Delta(F_i)$, since each $K_i$ is a Laurent monomial in the commuting $L$'s. For any $i,j$, expansion gives $[\Delta(E_i),\Delta(F_j)]=[E_i,F_j]\otimes K_i+K_j^{-1}\otimes[E_i,F_j]+[E_i\otimes K_i,K_j^{-1}\otimes F_j]$. The last cross term is zero: its first product can be reordered as $q^{a_{ji}-a_{ij}}K_j^{-1}E_i\otimes F_jK_i=K_j^{-1}E_i\otimes F_jK_i$, which is its reverse product by [F3]. If $i\ne j$, the remaining terms vanish; if $i=j$, they sum to $\bigl(K_i\otimes K_i-K_i^{-1}\otimes K_i^{-1}\bigr)/(q-q^{-1})=\Delta\bigl((K_i-K_i^{-1})/(q-q^{-1})\bigr)$. For $|i-j|>1$, $a_{ij}=0$ and the $K_i$ commute with $E_j,F_j$; expanding the two commutators therefore proves that the distant $E$ and $F$ relations are preserved. [given, F1, F2, F3, algebra]

1.3 Let $\gamma=q+q^{-1}$ and $S_{ij}(X,Y)=X^2Y-\gamma XYX+YX^2$ for adjacent $i,j$. For the $E$ relation write $\Delta(E_s)=A_s+B_s$ with $A_s=E_s\otimes K_s$, $B_s=1\otimes E_s$. In each of the three words $iij,iji,jii$, choose an $A$ at each selected position and a $B$ at each other position, then move the selected $K$ factors to the right using $K_rE_s=q^{a_{rs}}E_sK_r$. Grouping the resulting 24 terms by the number of selected positions gives: degree $0$ in the first factor is $1\otimes S_{ij}(E_i,E_j)$; degree $3$ is $S_{ij}(E_i,E_j)\otimes K_i^2K_j$; degree $1$ has respective coefficients $q+q^{-1}-\gamma$, $q^2+1-\gamma q$, $1+q^{-2}-\gamma q^{-1}$ on $E_i\otimes E_iE_jK_i$, $E_i\otimes E_jE_iK_i$, $E_j\otimes E_i^2K_j$; degree $2$ has respective coefficients $q^{-2}+1-\gamma q^{-1}$, $q^2+1-\gamma q$, $q+q^{-1}-\gamma$ on $E_i^2\otimes E_jK_i^2$, $E_iE_j\otimes E_iK_iK_j$, $E_jE_i\otimes E_iK_jK_i$. All six mixed coefficients are zero by the definition of $\gamma$, and the two pure terms vanish by the defining Serre relation. Thus $\Delta$ preserves every positive Serre relation. [given, F1, F2, F3, algebra]

2.1 The assignment $\phi(L_j)=L_j^{-1}$, $\phi(E_i)=F_i$, $\phi(F_i)=E_i$ preserves the presentation: it exchanges the two weight relations, sends the mixed commutator to its negative with $K_i$ replaced by $K_i^{-1}$, and exchanges the distant and Serre relations. It is an involution. On generators $\Delta(F_i)=\tau(\phi\otimes\phi)\Delta(E_i)$, where $\tau(x\otimes y)=y\otimes x$ is an algebra isomorphism. Since step 1.3 proves that the positive Serre polynomial maps to zero, applying the algebra maps $\tau$ and $\phi\otimes\phi$ proves that the negative Serre polynomial maps to zero as well. Together steps 1.2–2.1 show every relation is killed, so [F1] descends $\Delta$ to the quotient. The counit assignment kills the relations directly: each relation becomes either $1=1$ or $0=0$, so it too descends. [given, F1, F2, step 1.3, algebra]

3.1 Compare $\alpha\circ(\Delta\otimes\mathrm{id})\circ\Delta$ and $(\mathrm{id}\otimes\Delta)\circ\Delta$ as maps to $U_N\otimes(U_N\otimes U_N)$, and compare $\lambda\circ(\epsilon\otimes\mathrm{id})\circ\Delta$ and $\rho\circ(\mathrm{id}\otimes\epsilon)\circ\Delta$ with $\mathrm{id}_{U_N}$. All these composites are algebra homomorphisms by [F2] and [F4], so it suffices to check generators. The two counit composites return $L_j,E_i,F_i$. After applying the associator, both iterated coproducts on $L_j$ give $L_j\otimes L_j\otimes L_j$; on $E_i$, both give $E_i\otimes K_i\otimes K_i+1\otimes E_i\otimes K_i+1\otimes1\otimes E_i$; on $F_i$, both give $F_i\otimes1\otimes1+K_i^{-1}\otimes F_i\otimes1+K_i^{-1}\otimes K_i^{-1}\otimes F_i$. Hence $\Delta$ is coassociative with counit $\epsilon$. The vector representation of step 1.1 and the iterated coproduct therefore define actions on every $V_N^{\otimes n}$. They are finite sums and products of matrices with entries $0,1,q^{\pm1}$, so all entries lie in $\mathbb Z[q,q^{-1}]$. [given, F1, F2, F4, step 1.1, step 2.1, algebra] ∎
