---
id: lem-two-by-two-delta-complex-for-a-double-tower
kind: lemma
title: Two by two Delta complex for a double tower
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: [def-lim-one-obstruction-to-completeness, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Weibel, Chapter 5, Proposition 5.5.9 and the interchange issue
      url: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
---

## Statement

Assume AC. Let $A_{i,j}$, $i,j\ge0$, be a commuting double inverse system of modules over one ring. Write $L$ and $R$ for the countable Delta kernel and cokernel. Set $P=\prod_{i,j}A_{i,j}$, $D=\Delta_i$, and $E=\Delta_j$. The complex
$$K:\quad P\xrightarrow{x\mapsto(Dx,Ex)}P\oplus P\xrightarrow{(a,b)\mapsto Ea-Db}P$$
in degrees $0,1,2$ has natural identifications and an exact sequence
$$H^0(K)=L_iL_jA,\qquad 0\to R_iL_jA\to H^1(K)\to L_iR_jA\to0,\qquad H^2(K)=R_iR_jA.$$
The analogous statements with $i,j$ interchanged hold. In particular, if $L_iA_{i,j}=R_iA_{i,j}=0$ for each $j$, then $H^1(K)=0$ and $L_iR_jA=0$.

## Facts & Assumptions

[F1] [[def-lim-one-obstruction-to-completeness]] defines coordinate Delta kernels and cokernels for modules.

[F2] [[def-axiom-of-choice]] supplies simultaneous representatives of countably many quotient classes and simultaneous preimages of elements in the images of coordinate Delta maps.

## Proof

**Given:** The double tower, whose transition squares commute; the cohomology of this three-term complex means its kernel modulo image.

1.1 Write horizontal and vertical transitions as $u,v$. At $(i,j)$, both $DEx$ and $EDx$ equal $x_{i,j}-u x_{i+1,j}-v x_{i,j+1}+uv x_{i+1,j+1}$, with the last equality using the commuting square. Thus $DE=ED$ and the displayed composite is zero. If $V=\ker E$ and $W=P/EP$, then $D$ preserves $V$ and induces a map on $W$. The common kernel is exactly $\ker(D:V\to V)$. [F1]

2.1 Send a closed pair $(a,b)$, satisfying $Ea=Db$, to $[b]\in W$. Its $D$ image vanishes. A boundary $(Dx,Ex)$ maps to zero, so this gives $H^1(K)\to\ker(D:W\to W)$. It is onto: for $[b]$ in that kernel, $Db=Ea$ for some $a$, and the pair is closed. The rule is independent of cohomology representatives and is linear because both the coordinate map and quotient map are linear. [step 1.1]

3.1 The map $V\to H^1(K)$ sends $a$ to $[(a,0)]$. Its kernel is $D(V)$: a pair $(a,0)$ is $(Dx,Ex)$ exactly when $x\in V$ and $a=Dx$. Hence it induces an injection $\operatorname{coker}(D:V\to V)\to H^1(K)$. If a closed pair has $[b]=0$, write $b=Ex$ and subtract $(Dx,Ex)$; the new pair is $(a-Dx,0)$ with first coordinate in $V$. Conversely such a pair has zero image in $W$. This proves middle exactness in both directions. [step 1.1, step 2.1]

4.1 The last cohomology is $P/(EP+DP)$, since $Ea-Db$ runs through that sum of submodules. This quotient is precisely $\operatorname{coker}(D:W\to W)$, by sending the class of $z$ to its class modulo $EP+DP$; both kernels are the stated sum. All maps just constructed commute with a morphism of double towers, since it commutes with $D,E$, sends closed pairs to closed pairs and boundaries to boundaries. [step 1.1, step 2.1, step 3.1]

5.1 Coordinate grouping identifies $V$ with $\prod_i L_jA_{i,j}$ without choice. The map $P\to\prod_i R_jA_{i,j}$ is onto by [F2], choosing one representative tuple for each $i$. Its kernel consists of tuples whose $i$ row lies in the image of $\Delta_j$; choosing a Delta preimage for each row by [F2] identifies that kernel with $EP$. Hence $W\cong\prod_iR_jA_{i,j}$. Both identifications intertwine the induced $D$ with the $i$-direction Delta. Substitution into steps 1.1–4.1 proves all displayed formulas. [F1, F2, step 1.1, step 2.1, step 3.1, step 4.1]

6.1 Swap $i,j$ and the middle coordinates. The degree-zero map is identity, the degree-one map is $(a,b)\mapsto(b,a)$, and the degree-two map is multiplication by $-1$. These maps form a complex isomorphism, since $Db-Ea=-(Ea-Db)$. Applying step 5.1 in this order gives $0\to R_jL_iA\to H^1(K)\to L_jR_iA\to0$. If every $L_iA$ and $R_iA$ is zero, both end terms vanish, hence $H^1(K)=0$. In the original exact sequence its quotient $L_iR_jA$ is therefore zero. [step 5.1]

7.1 The formulas and consequence now follow. The zero double system makes every term zero. If only $A_{0,0}=M$ is nonzero, then $D=E=1$ on $P=M$; the complex is the diagonal inclusion followed by $(a,b)\mapsto a-b$, so all cohomology is zero as the formulas predict. No transition is required to be strict, nonzero, or surjective. Both towers are indexed by all natural numbers, not an empty index set. The only use of AC was the two countable selections in step 5.1; the finite pair manipulations and sign reversal need none. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, step 6.1] ∎

## Source notes

This explicit three-term calculation supplies the interchange needed in the owner Delta alternatives, section 4, without a later Grothendieck spectral sequence. The source citation identifies the convergence problem it serves; it is not used in place of the calculation.
