---
id: lem-singular-product-chain-equivalence-by-simplex-models
kind: lemma
title: Singular product chain equivalence by simplex models
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: [def-singular-chain-cross-product-on-generators, lem-singular-chain-cross-product-boundary-formula, prop-singular-chain-cross-products-are-natural, thm-singular-chain-homotopy-formula, def-singular-cochain-complex-with-coefficients]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Miller, section 25, Lemma 25.10 through Theorem 25.13, printed pages 64–66
      url: https://math.mit.edu/~hrm/papers/notes-905.pdf
---

## Statement

For all spaces $X,Y$, the singular shuffle map
$$S:C_\bullet(X;\mathbb Z)\otimes C_\bullet(Y;\mathbb Z)\longrightarrow C_\bullet(X\times Y;\mathbb Z)$$
is a natural chain homotopy equivalence. The tensor complex has differential $d(x\otimes y)=dx\otimes y+(-1)^{|x|}x\otimes dy$ and direct-sum totalization. A natural inverse and natural homotopies can be specified without AC. Extension of scalars gives the same assertion over every commutative unital ring.

## Facts & Assumptions

[F1] [[def-singular-chain-cross-product-on-generators]] gives the shuffle map, equal to the vertex-pair identification in degree zero. [[lem-singular-chain-cross-product-boundary-formula]] proves its tensor differential identity, and [[prop-singular-chain-cross-products-are-natural]] proves naturality.

[F2] [[thm-singular-chain-homotopy-formula]] supplies the explicit prism homotopy for any specified homotopy of spaces, including its degree-zero identity.

[F3] Singular chains are free on singular simplices and coefficients are obtained by scalar extension, as recalled in [[def-singular-cochain-complex-with-coefficients]].

## Proof

**Given:** Put $F(X,Y)=C(X)\otimes C(Y)$ and $D(X,Y)=C(X\times Y)$, initially over $\mathbb Z$. All complexes have zero negative degrees and ordinary, unnormalized singular chains.

1.1 Let $Q$ be a standard simplex or a product of two standard simplices, with first vertex $v$. The specified affine homotopy $H(x,t)=(1-t)v+tx$ is continuous and takes values in $Q$ by convexity. Let $p:C(Q)\to C(*)$ and $j:C(*)\to C(Q)$ be induced by collapse and inclusion of $v$. By [F2], its prism $P$ satisfies $dP+Pd=1-jp$. The point complex has a generator $e_n$ in every degree; $d e_n=e_{n-1}$ for positive even $n$ and zero for odd $n$. Define $a_n(e_n)=e_{n+1}$ for odd $n$, and zero for even $n$. If $\epsilon:C(*)\to\mathbb Z[0]$ and $i:\mathbb Z[0]\to C(*)$ are identity in degree zero, direct substitution in even, odd and zero degrees gives $da+ad=1-i\epsilon$. Therefore $h=P+jap$ satisfies $dh+hd=1-j i\epsilon p$. Put $e=j i\epsilon p$; this is the degree-zero augmentation projection onto the vertex. This contraction treats the nonzero higher chains of a point explicitly. [F2, F3, given]

1.2 In degree $n$, the basis of $D(X,Y)$ consists of maps $\sigma=(\sigma_X,\sigma_Y):\Delta^n\to X\times Y$. Each is the unique pushforward under the pair map $(\sigma_X,\sigma_Y)$ of the diagonal simplex $a_n$ in $D(\Delta^n,\Delta^n)$. The basis of $F_n(X,Y)$ consists of pairs of simplices of degrees $p,q$ with $p+q=n$. Each is the unique pushforward under its pair map of $b_{p,q}=\operatorname{id}_{\Delta^p}\otimes\operatorname{id}_{\Delta^q}$. Accordingly any specified value on each of these universal generators defines a linear natural transformation, by pushing the value forward and extending linearly. Composition of pair maps proves naturality; even coincident image simplices cause no ambiguity because the maps define the basis elements themselves. [F3, given]

2.1 For a model pair $(\Delta^p,\Delta^q)$, use step 1.1 to obtain contractions $h_C,h_E$ of its two factors, with projections $e_C,e_E$. On their tensor complex set $h(x\otimes y)=h_Cx\otimes y+(-1)^{|x|}e_Cx\otimes h_Ey$. The second term is zero unless $|x|=0$. In $dh+hd$, the mixed terms from the first summand cancel because their signs are $(-1)^{|x|+1}$ and $(-1)^{|x|}$. The mixed terms of the second cancel because $e_C$ is a chain map, leaving $(1-e_C)\otimes1+e_C\otimes(1-e_E)=1-e_C\otimes e_E$. Thus $F$ on every model has a specified contraction onto its vertex in degree zero. Step 1.1 gives such a contraction for $D$ on every model as well. In either target, every positive-degree cycle $z$ has $d h z=z$; a degree-zero cycle has the same property if its augmentation is zero. [step 1.1]

3.1 Define $T_0:D_0\to F_0$ by sending the vertex $(x,y)$ to $x\otimes y$, inverse to $S_0$. Suppose $T$ is a natural chain map below degree $n\ge1$. In the model $(\Delta^n,\Delta^n)$ put $z=T_{n-1}d a_n$. For $n>1$, $dz=T_{n-2}d^2a_n=0$. For $n=1$, $z$ has augmentation zero since the two endpoint vertices have opposite coefficients and $T_0$ preserves their augmentations. Apply the specified contraction of the target $F$ to define $t_n=h z$, so $dt_n=z$. Define $T_n$ on every simplex by pushing $t_n$ forward as in step 1.2. Naturality of lower $T$, the boundary, and pushforward gives $dT_n=T_{n-1}d$ on every generator. Induction constructs a natural chain map $T$ in every degree. No choice of a filling is made: the contraction gives its formula. [F1, step 2.1, step 1.2]

3.2 Here is the homotopy construction needed for the composites. Let $u,v:E\to G$ be natural chain maps, where $E$ is $F$ or $D$ with the universal generators of step 1.2, and $G$ is $F$ or $D$ with the model contractions of step 2.1. Suppose $u,v$ preserve the same augmentation in degree zero. Start with $H_{-1}=0$. Given $H$ below degree $n$, for each universal generator $a$ of degree $n$ put $z=(u-v)a-H_{n-1}da$. For $n>0$, applying $d$ and using the chain-map identities and $dH_{n-1}+H_{n-2}d=u-v$ in degree $n-1$ gives $dz=(u-v)da-(u-v)da+H_{n-2}d^2a=0$. For $n=0$, the augmentation of $z$ is zero by hypothesis. Define $H_n(a)=h z$ in the target model, and push forward to all generators. Then $dH_n(a)=z$ by the contraction, proving $dH_n+H_{n-1}d=u-v$. Naturality follows from the prescribed pushforward rule; hence the induction gives a natural chain homotopy. [step 2.1, step 1.2]

4.1 The map $S$ is a natural chain map by [F1], and $T$ is one by step 3.1. The composites $TS$ and $ST$ are the identity on degree-zero generators, so they and the appropriate identities have the same augmentation. Apply step 3.2 first with $(E,G,u,v)=(F,F,TS,1)$ and then $(D,D,ST,1)$. This supplies natural homotopies $TS\simeq1$ and $ST\simeq1$, proving the integral equivalence. In particular the construction has not inferred a chain equivalence merely from an isomorphism in homology. [F1, step 3.1, step 3.2]

5.1 Tensor all the integral maps and homotopies with $R$. Chain-homotopy identities remain identities under any additive functor. The canonical map $(C(X;\mathbb Z)\otimes_{\mathbb Z}C(Y;\mathbb Z))\otimes_{\mathbb Z}R\to C(X;R)\otimes_R C(Y;R)$ sends $(x\otimes y)\otimes r$ to $(x\otimes1)\otimes(y\otimes r)$; its inverse sends $(x\otimes a)\otimes(y\otimes b)$ to $(x\otimes y)\otimes ab$. Tensor relations make these well-defined inverses, commuting with the signed differential. Thus the extended equivalence is exactly the asserted coefficient version. [F3, step 4.1]

6.1 If either space is empty, both complexes are zero and all maps are unique. For two points, higher singular generators remain present, with the contraction calculated in step 1.1; degree zero is the identity on the single vertex pair. The zero ring gives zero complexes. Each tensor-degree diagonal has finitely many pairs $p+q=n$, and all image chains are finite because each prism and each input chain is finite. The recursion uses uniquely specified model contractions in every degree and no arbitrary selection, hence no AC. [F1, F2, F3, step 1.1, step 2.1, step 1.2, step 3.1, step 3.2, step 4.1, step 5.1] ∎
