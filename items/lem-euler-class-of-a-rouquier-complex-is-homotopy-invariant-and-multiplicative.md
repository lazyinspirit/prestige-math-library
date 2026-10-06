---
id: lem-euler-class-of-a-rouquier-complex-is-homotopy-invariant-and-multiplicative
kind: lemma
title: "Euler classes of Rouquier complexes are homotopy invariant and multiplicative"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps: [def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization, def-mapping-cone-of-a-chain-map, def-shift-of-a-chain-complex, def-standard-cone-triangle-in-the-homotopy-category, def-distinguished-cone-triangle-in-the-homotopy-category, def-homotopy-category-of-chain-complexes, def-complex-homotopy-and-contractibility-in-an-additive-category, thm-a-chain-map-is-a-homotopy-equivalence-exactly-when-its-cone-is-contractible, thm-the-homotopy-category-of-an-abelian-category-is-triangulated, prop-the-cone-object-of-a-map-is-unique-up-to-nonunique-isomorphism, def-triangulated-grothendieck-group, def-split-grothendieck-group-of-an-additive-category, def-split-grothendieck-rings-of-type-a-soergel-categories, def-the-type-a-soergel-category, def-the-idempotent-completion-of-a-preadditive-category]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Eugene Gorsky, Oscar Kivinen, José Simental, Algebra and geometry of link homology: Lecture Notes from the IHES 2021 Summer School, Bull. London Math. Soc. 55 (2023) 537-591, §3.1"
      url: "https://arxiv.org/pdf/2108.10356"
      locator: "§3.1, Remark 3.7: the additive, nonabelian Soergel category and its homotopy category, PDF p. 7"
    - title: "Raphaël Rouquier, Categorification of the braid groups, arXiv:math/0409593v1 (30 September 2004), §3 \"The 2-braid group\""
      url: "https://arxiv.org/pdf/math/0409593"
      locator: "§3.3.2 and Remark 3.10: the two-braid category and the additive Soergel category are separate constructions, PDF pp. 10-11"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $C,D$ be bounded cochain complexes of graded $(R,R)$-bimodules whose terms
lie in the type-A Soergel category $\mathrm{SBim}_n$ (for instance Rouquier
word complexes), and define the alternating class
$$\chi(C):=\sum_{m\in\mathbb Z}(-1)^m[C^m]\ \in\ K_0^{\mathrm{split}}(\mathrm{SBim}_n),$$
the cochain indexing being translated to the chain indexing of
[[def-mapping-cone-of-a-chain-map]] by $C_m:=C^{-m}$. Then:

1. $\chi$ is a homotopy invariant: if $C\simeq D$ in $K^b$, then
   $\chi(C)=\chi(D)$, so $\chi$ is well defined on isomorphism classes of the
   homotopy category;
2. $\chi$ is multiplicative: $\chi(C\otimes_RD)=\chi(C)\chi(D)$ for the signed
   tensor totalization and more generally for every finite tensor product;
3. for every chain map $f\colon C\to D$ one has
   $\chi(\operatorname{Cone}(f))=\chi(D)-\chi(C)$, and $\chi$ is additive on
   distinguished triangles of the homotopy category, so it descends to a
   homomorphism $K_0^{\mathrm{tri}}\to K_0^{\mathrm{split}}(\mathrm{SBim}_n)$ on
   the triangulated Grothendieck group of the full triangulated subcategory of
   complexes with terms in $\mathrm{SBim}_n$;
4. for every signed word $\sigma=\sigma_{i_1}^{\epsilon_1}\cdots\sigma_{i_r}^{\epsilon_r}$,
   the iterated signed tensor totalization
   $F_{i_1}^{\epsilon_1}\otimes_R\cdots\otimes_RF_{i_r}^{\epsilon_r}$ (the word
   complex $F(\sigma)$ once that notation is introduced) satisfies
   $\chi(F(\sigma))=\prod_{k=1}^r\chi(F_{i_k}^{\epsilon_k})$.

In particular the alternating class of a Rouquier complex depends only on its
homotopy class and is compatible with tensor products.

## Facts & Assumptions

**Given:** The ring $R=\mathbb Q[x_1,\ldots,x_n]$, the type-A Soergel category $\mathrm{SBim}_n$ of graded $(R,R)$-bimodules, bounded cochain complexes $C,D$ with all terms in $\mathrm{SBim}_n$, and the alternating class $\chi$ of the statement.

[F1] *The category and its idempotents.* $\mathrm{SBim}_n$ is the idempotent completion $\operatorname{Kar}(\mathrm{BSBim}_n)$ of the additive category of finite sums of shifted Bott–Samelson bimodules; its objects are the pairs $(M,e)$ with $e\in\operatorname{End}(M)$ a degree-zero idempotent, with composition inherited from the ambient category and identity on $(M,e)$ given by $e$, and it is closed under finite direct sums, internal shifts, tensor products over $R$, and direct summands ([[def-the-type-a-soergel-category]], [[def-the-idempotent-completion-of-a-preadditive-category]]).

[F2] *Split Grothendieck group.* For the additive category $\mathrm{SBim}_n$ the split Grothendieck group is the free abelian group on isomorphism classes of objects modulo $[X\oplus Y]=[X]+[Y]$; in particular $[0]=0$, isomorphic objects have equal classes, and the classes of a direct-sum decomposition add up ([[def-split-grothendieck-group-of-an-additive-category]]). Equipped with the product $[X][Y]:=[X\otimes Y]$ this is the split Grothendieck ring of [[def-split-grothendieck-rings-of-type-a-soergel-categories]].

[F3] *Cones, shifts and contractibility.* For a chain map $f\colon C\to D$ the mapping cone has $\operatorname{Cone}(f)_n=D_n\oplus C[1]_n=D_n\oplus C_{n-1}$, and the shift has $C[k]_n=C_{n-k}$ with $d^{C[k]}_n=(-1)^kd^C_{n-k}$ ([[def-mapping-cone-of-a-chain-map]], [[def-shift-of-a-chain-complex]]). Under the reindexing $C^m:=C_{-m}$ of [[def-complex-homotopy-and-contractibility-in-an-additive-category]] this is a cochain complex with $\operatorname{Cone}(f)^m=D^m\oplus C^{m+1}$ and $d(y,x)=(d_Dy+f^{m+1}x,-d_C^{m+1}x)$; a cochain map is a homotopy equivalence exactly when its (cochain) cone is contractible, i.e. admits a family $h^n\colon C^n\to C^{n-1}$ with $1_{C^n}=d^{n-1}h^n+h^{n+1}d^n$ for all $n$ ([[thm-a-chain-map-is-a-homotopy-equivalence-exactly-when-its-cone-is-contractible]]).

[F4] *Homotopy category and triangles.* Morphisms of the homotopy category $K^b(R^e\text{-grmod})$ of bounded complexes are homotopy classes, so an isomorphism there is a homotopy equivalence ([[def-homotopy-category-of-chain-complexes]]). The ambient category is triangulated by its shifts and distinguished cone triangles ([[thm-the-homotopy-category-of-an-abelian-category-is-triangulated]]), a triangle being distinguished when it is isomorphic to a standard cone triangle ([[def-standard-cone-triangle-in-the-homotopy-category]], [[def-distinguished-cone-triangle-in-the-homotopy-category]]); two distinguished completions of the same map have isomorphic third objects ([[prop-the-cone-object-of-a-map-is-unique-up-to-nonunique-isomorphism]]).

[F5] *Totalization, multiplicativity and the ring.* The signed tensor totalization of bounded complexes $C,D$ of graded bimodules has degree-$n$ term $\operatorname{Tot}(C\otimes_RD)^n=\bigoplus_{p+q=n}C^p\otimes_RD^q$ with Koszul differential $d(c\otimes e)=d_Cc\otimes e+(-1)^pc\otimes d_Ce$ ([[def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization]]), its terms are objects of $\mathrm{SBim}_n$ whenever the terms of $C$ and $D$ are [F1], and $[C^p\otimes_RD^q]=[C^p][D^q]$ in the split Grothendieck ring [F2].

[F6] *Triangulated Grothendieck group.* $K_0^{\mathrm{tri}}(\mathcal T)$ is the free abelian group on the isomorphism classes of an essentially small triangulated category $\mathcal T$ modulo $[Y]-[X]-[Z]$ for each distinguished triangle $X\to Y\to Z\to X[1]$ ([[def-triangulated-grothendieck-group]]).

## Proof

**Proof technique:** direct.

1.1 The class $\chi(C)$ is well defined: $C$ is bounded, so only finitely many terms are nonzero and the sum is finite; each term lies in $\mathrm{SBim}_n$ by hypothesis, so each $[C^m]$ is a class in the split Grothendieck group; additivity of classes gives $\chi(C\oplus D)=\chi(C)+\chi(D)$, $\chi(C[m])=(-1)^m\chi(C)$ and $\chi(0)=0$. [F1, F2]

1.2 For a chain map $f\colon C\to D$ between such complexes, the cone term formula gives $\chi(\operatorname{Cone}(f))=\sum_m(-1)^m([D^m]+[C^{m+1}])=\chi(D)-\chi(C)$. [F3, F2]

1.3 Suppose $(C,d)$ is contractible with contracting homotopy $h$, so that $1_{C^m}=d^{m-1}h^m+h^{m+1}d^m$ for all $m$. Put $q_m:=h^{m+1}d^m$ and $p_m:=1-q_m=d^{m-1}h^m$; the second description shows $p_m+q_m=1$, and $q_m^2=h^{m+1}d^mh^{m+1}d^m=h^{m+1}(1-h^{m+2}d^{m+1})d^m=h^{m+1}d^m=q_m$ using the homotopy identity at degree $m+1$ and $d^{m+1}d^m=0$; hence $q_m,p_m$ are idempotents with $q_mp_m=0$ and $p_mq_m=0$. Both are degree-zero endomorphisms of the object $C^m$ of $\mathrm{SBim}_n$, so the Karoubi objects $(C^m,q_m)$ and $(C^m,p_m)$ exist and the maps $u=(q_m,p_m)\colon C^m\to(C^m,q_m)\oplus(C^m,p_m)$ and $v=(q_m,p_m)^T\colon(x,y)\mapsto x+y$ in the reverse direction are inverse isomorphisms, since $vu=q_m+p_m=1$ and $uv(x,y)=(q_mx+q_my,p_mx+p_my)=(x,y)$ for $x=q_mx$, $y=p_my$. Hence in the split Grothendieck group $[C^m]=[(C^m,q_m)]+[(C^m,p_m)]$. [F1, F2, F3]

2.1 Put $\alpha_m:=p_{m+1}d^mq_m\in\operatorname{Hom}((C^m,q_m),(C^{m+1},p_{m+1}))$ and $\beta_m:=q_mh^{m+1}p_{m+1}$ in the reverse direction. From $p_{m+1}=d^mh^{m+1}$ and $q_m=h^{m+1}d^m$ one gets $d^mq_m=p_{m+1}d^m$ and $q_mh^{m+1}=h^{m+1}p_{m+1}$, hence $\alpha_m\beta_m=p_{m+1}d^mh^{m+1}p_{m+1}=p_{m+1}p_{m+1}p_{m+1}=p_{m+1}$ and $\beta_m\alpha_m=q_mq_mq_m=q_m$; as the identities of the Karoubi objects $(C^{m+1},p_{m+1})$ and $(C^m,q_m)$ are $p_{m+1}$ and $q_m$, the maps $\alpha_m,\beta_m$ are mutually inverse isomorphisms, so $[(C^{m+1},p_{m+1})]=[(C^m,q_m)]$. [F1, F2, step 1.3]

2.2 Let $C,D$ be bounded complexes with terms in $\mathrm{SBim}_n$. Every term $C^p\otimes_RD^q$ of the signed tensor totalization lies in $\mathrm{SBim}_n$, and $[C^p\otimes_RD^q]=[C^p][D^q]$ in the split Grothendieck ring, so $\chi(C\otimes_RD)=\sum_{p,q}(-1)^{p+q}[C^p\otimes_RD^q]=\sum_{p,q}(-1)^{p+q}[C^p][D^q]=\bigl(\sum_p(-1)^p[C^p]\bigr)\bigl(\sum_q(-1)^q[D^q]\bigr)=\chi(C)\chi(D)$; both sums are finite because $C$ and $D$ are bounded. [F2, F5, step 1.1]

3.1 Combining steps 1.3 and 2.1, $[C^m]=[(C^m,q_m)]+[(C^m,p_m)]=[(C^m,q_m)]+[(C^{m-1},q_{m-1})]$ for every $m$, so $\chi(C)=\sum_m(-1)^m[(C^m,q_m)]+\sum_m(-1)^m[(C^{m-1},q_{m-1})]=\sum_m(-1)^m[(C^m,q_m)]-\sum_m(-1)^m[(C^m,q_m)]=0$, the sums being finite because $C$ is bounded. Thus every contractible complex with terms in $\mathrm{SBim}_n$ has vanishing Euler class. [step 1.3, step 2.1, F2]

4.1 If $C\simeq D$ in $K^b$, choose a homotopy equivalence $f\colon C\to D$; by [F4] this is an isomorphism in the homotopy category. By [F3] the cone of $f$ is contractible, so step 3.1 gives $\chi(\operatorname{Cone}(f))=0$, and step 1.2 gives $0=\chi(\operatorname{Cone}(f))=\chi(D)-\chi(C)$. Hence $\chi(C)=\chi(D)$, and $\chi$ is constant on isomorphism classes of the homotopy category; in particular $\chi$ of a contractible complex is $0$. [step 1.2, step 3.1, F3, F4]

5.1 Let $\mathcal T$ be the replete full subcategory of $K^b(R^e\text{-grmod})$ generated by bounded complexes with terms in $\mathrm{SBim}_n$, extending $\chi$ to it by the homotopy invariance of step 4.1. It is essentially small: use the fixed set of Soergel representatives and bounded lists of differential matrices. It is closed under shifts and under cones (the terms of $\operatorname{Cone}(f)^m=D^m\oplus C^{m+1}$ are sums of objects of $\mathrm{SBim}_n$), so with the inherited triangles it is a triangulated category: the completions and rotations required by the axioms exist in the ambient triangulated category and their objects remain in $\mathcal T$ by this closure. For a distinguished triangle $X\xrightarrow{a}Y\to Z\to X[1]$ of $\mathcal T$, the standard cone triangle of the chain map $a$ is another distinguished completion of the same map, so its third object $\operatorname{Cone}(a)$ is isomorphic to $Z$; by step 4.1 and step 1.2, $\chi(Z)=\chi(\operatorname{Cone}(a))=\chi(Y)-\chi(X)$. Therefore $\chi$ vanishes on every generator $[Y]-[X]-[Z]$ of the kernel of the presentation of $K_0^{\mathrm{tri}}(\mathcal T)$ and, being a function on isomorphism classes by step 4.1, extends to a well-defined group homomorphism $K_0^{\mathrm{tri}}(\mathcal T)\to K_0^{\mathrm{split}}(\mathrm{SBim}_n)$. [step 1.2, step 4.1, F1, F4, F6]

6.1 Induction on $r$ using step 2.2 gives $\chi(F_{i_1}^{\epsilon_1}\otimes_R\cdots\otimes_RF_{i_r}^{\epsilon_r})=\prod_{k=1}^r\chi(F_{i_k}^{\epsilon_k})$ for every finite sequence of signed generators: the case $r=0$ is $\chi(R)=[R]=1$, the unit of the split Grothendieck ring, and the induction step applies step 2.2 to the bounded complex $F_{i_1}^{\epsilon_1}\otimes_R\cdots\otimes_RF_{i_{r-1}}^{\epsilon_{r-1}}$ and the two-term complex $F_{i_r}^{\epsilon_r}$, whose terms are objects of $\mathrm{SBim}_n$; this is the stated formula for the word complex. [step 2.2, F2, F5] ∎ 