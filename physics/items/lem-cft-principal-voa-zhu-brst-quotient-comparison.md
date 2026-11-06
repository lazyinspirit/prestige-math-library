---
id: lem-cft-principal-voa-zhu-brst-quotient-comparison
kind: lemma
title: Natural principal VOA Zhu and actual-ideal BRST comparison
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
axiom_use: ZF + AC
deps:
  - def-axiom-of-choice
  - def-cft-zhu-algebra
  - thm-cft-zhu-algebra-structure-and-top-action
  - lem-cft-affine-zhu-quotient-and-integrable-descent
  - lem-cft-principal-whittaker-universal-equivalence
  - lem-cft-principal-quotient-li-tail-regularity-and-strictness
  - lem-cft-harish-chandra-bimodule-principal-reduction-exact-and-strict
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-cft-zhu-algebra: mathematical-premise
  thm-cft-zhu-algebra-structure-and-top-action: mathematical-premise
  lem-cft-affine-zhu-quotient-and-integrable-descent: mathematical-premise
  lem-cft-principal-whittaker-universal-equivalence: mathematical-premise
  lem-cft-principal-quotient-li-tail-regularity-and-strictness: mathematical-premise
  lem-cft-harish-chandra-bimodule-principal-reduction-exact-and-strict: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Tomoyuki Arakawa, Rationality of W-algebras, principal nilpotent cases
      url: https://arxiv.org/pdf/1211.7124v3
      locator: Sections 4–8; old/new conformal shift, natural closed-representative map, and actual-ideal cokernel comparison reconstructed below.
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 8
---

## Statement

Assume AC. Fix a complex simple g, a principal integral Dynkin grading with h/2 as grading element, its character chi on positive n, and a noncritical affine level k. Write $U=U(g)$, $Z=Z(U)$, $Y=U/U(n-\chi )$ and $W^{k}=H^{0}_{f}(V^{k}(g))$. For a homogeneous affine vacuum ideal N put $V=V^{k}(g)/N$, $A(V)=U/J$ using the ordinary Sugawara Zhu identification, and $H=H^{0}_{f}(V)$. Identify ordinary and h-shifted affine Zhu spaces by the explicit conformal-shift operator in the proof.

The natural map which sends a closed BRST state to its class in the finite BRST Zhu quotient gives the algebra isomorphisms

    $\eta _{univ}$ : $A(W^{k})$ $\to $ Z,
    $\eta _{V}$ : A(H) $\to $ Wh(Y/JY) $=$ Z/Wh(JY).

The central ideal on the right is formed from the actual affine Zhu ideal J, not from its radical, its scalar values on a list of tops, or a substituted finite polynomial. The universal map and every quotient map use the same conformal shift and the same principal character. H need not first be identified with its simple quotient, and the assertion permits zero reduction. No W rationality or classification of its simple modules is assumed.

## Statement references

[[def-cft-zhu-algebra]]

[[thm-cft-zhu-algebra-structure-and-top-action]]

[[lem-cft-affine-zhu-quotient-and-integrable-descent]]

[[lem-cft-principal-whittaker-universal-equivalence]]

[[lem-cft-principal-quotient-li-tail-regularity-and-strictness]]

[[lem-cft-harish-chandra-bimodule-principal-reduction-exact-and-strict]]

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** Precisely the principal grading, noncritical level, homogeneous actual ideal and shift convention in the Statement.

[F1] [[def-cft-zhu-algebra]] and [[thm-cft-zhu-algebra-structure-and-top-action]] give the circle/star residue identities. On a module M use the actual Frenkel–Zhu space $A(M)=M/O(M)$, where a circle m is $\sum _{i}$ binom(wt(a),i) $a_{i-2}m$. Its left star product uses binom(wt(a),i), and its right star product uses binom(wt(a)-1,i), both with $a_{i-1}m$. Right exactness follows by lifting the coefficient m in these finite sums through a module quotient; it is not a reverse-Zhu rationality criterion.

[F2] [[lem-cft-affine-zhu-quotient-and-integrable-descent]] supplies the actual ordinary affine identification $A(V^{k})=U$ and $A(V)=U/J$, with J the image of A(N). The ordinary state-weight filtration is the quotient PBW filtration, by its current-word reduction, and the adjoint g action is locally finite on A(M).

[F3] [[lem-cft-principal-quotient-li-tail-regularity-and-strictness]] supplies actual $H^{0}$ right exactness, induced Li edge comparison on finitely generated loop-bounded modules, universal intrinsic Li, and $R_{W}=O(S)$, together with strict $W^{k}$ to H for a vertex quotient. For a general module M the induced filtration on $H^{0}$ C(M) is compatible; intrinsic Li is finer, so its C2 quotient surjects onto the induced degree-zero classical reduction. No intrinsic module-filtration equality is needed below.

[F4] [[lem-cft-harish-chandra-bimodule-principal-reduction-exact-and-strict]] supplies exact finite HC reduction $\Phi (B)=\operatorname{Wh}(B/B I_{\chi })$, its actual finite Clifford BRST model, and its good-Kazhdan associated-graded comparison.

[F5] [[lem-cft-principal-whittaker-universal-equivalence]] identifies $\Phi (U)=\operatorname{Wh}(Y)=Z$, with graded leading map the principal invariant restriction, and identifies every actual U-submodule JY with Y times its central Whittaker ideal.

[A1] [[def-axiom-of-choice]] is inherited from F3–F5. Every positive-mode exponential below is finite on each old-energy-bounded vector; it is not an analytic convergence assumption.

## Proof

**Given:** F1–F5 and A1. All Zhu residues and ghost sums are algebraic and finite on each vector.

1.1 Fix the conformal-shift sign explicitly. Put $\xi =h[-1]1$ and $\omega _{\text{new}}=\omega _{\text{old}}+(1/2)T$ xi, so $H_{\text{new}}=H_{\text{old}}-\xi _{0}/2$. Define $T_{\Delta }=\operatorname{exp}(\sum _{n\ge 1} (-1)^{n} \xi _{n}/(2n))$ and $\Delta (s)=s^{-\xi _{0}/2}$ $\operatorname{exp}(\sum _{n\ge 1} (-1)^{n} \xi _{n} s^{-n}/(2n))$. Positive xi modes commute and lower old energy, so these operators and their inverses are locally finite. From the mode commutator identity, the coefficient of $\xi _{j}$ in conjugation by log $T_{\Delta }$ is -log(1+z)/2 for $j=0$ and $(-1)^{j}(1+z)^{-j}/(2j)$ for $j\ge 1$: expand the binomial coefficients binom(n,j)/n. Exponentiating the commuting operators gives $T_{\Delta }$ $Y(a,z)=Y(\Delta (1+z)a,z)$ $T_{\Delta }$. If $\xi _{0}$ $a=2j$ a and $\Delta (s)a=\sum $ $s^{-j-n}$ $a_{n}$, then $wt_{\text{new}}(a_{n})=wt_{\text{old}}(a)-j-n$. Multiplying the circle or either star residue by $(1+z)^{wt_{\text{old}}(a)}$, or its right-product exponent one less, proves exactly that $T_{\Delta }$ takes old circles/products to new circles/products. It induces $A_{\text{old}}(M)$ to $A_{\text{new}}(M)$ and its inverse for every module here. It preserves the actual ideal because N is stable under every $\xi _{n}$. On an affine current x its map is $[x]_{\text{new}}-(k/2)B(h,x)$; roots are unchanged. The test x[-2]+x[-1] for a root of grade j becomes x[-2]+(1-j)x[-1], fixing the sign rather than leaving an unspecified spectral-flow translation. [given, F1, F2, A1, construct, algebra]

2.1 Compute the actual Zhu complex before its cohomology. For the charged ghosts of $n_{j}$ the improved weights are $\operatorname{wt}(b)=1-j$ and $\operatorname{wt}(c)=j$. Their circle/translation relations eliminate derivative ghost modes. In physical mode notation the zero-energy pair is b[-j],c[j]; declare b[m] with $m>-j$ and c[n] with $n>j$ to annihilate the top, let b[-j],c[j] act in the finite regular Clifford representation, and generate the module by the remaining, strictly energy-raising exterior modes. The relation $\{b[m],c[n]\}=\delta _{m+n,0}$ makes this induction consistent and gives the current ghost fields with the stated shifted Hamiltonian. Their star anticommutator is $b*c+c*b=1$: the two contraction coefficients sum to $\operatorname{wt}(b)+\operatorname{wt}(c)=1$, and the remaining normally ordered sum is zero. The other anticommutators vanish. Ordered ghost monomials therefore give exactly Cl(n direct-sum n*). There are no further relations: the shifted zero-energy ghost modes act faithfully on that finite faithful Clifford top, whose loop Fock induction was explicitly constructed above. Mixed coefficient/ghost fields have zero cross OPE. Expanding $(1+z)^{a+b}=(1+z)^{a}(1+z)^{b}$ in their circle residues, and using the factor circle and translation relations, reduces mixed words to the tensor products of their two Zhu classes; conversely the two factor maps commute and recover every mixed normally ordered word. These inverse reductions prove $A(C(M))=A_{\text{new}}(M)$ tensor Cl, including bimodule actions. This calculation uses only integer Hamiltonian residue identities; positivity of the full unreduced ghost/current Hamiltonian is not asserted. After step 1.1 this is $A_{\text{old}}(M)$ tensor Cl. [F1, F2, step 1.1, construct, algebra]

3.1 The BRST state Q has improved weight one, so its zero-mode derivation induces the supercommutator by its Zhu class. Its class under step 2.1 is the actual finite $Q=\sum (u_{i}-\chi _{i})c^{i}$ minus one half sum $f_{ij}^{s}$ $c^{i}$ $c^{j}$ $b_{s}$. The affine shift in step 1.1 does not change any constrained positive-root current. In converting ghost normal products to stars, the possible linear correction is a contraction times $f_{ij}^{j}$ or $f_{ij}^{i}$; these are zero because positive-root n is nilpotent and has zero adjoint traces. Thus the differential is precisely the finite BRST differential of F4, with coefficient A(M) and the same actual ideal. If a cohomology state is changed by a BRST boundary, its finite Zhu class changes by a finite boundary. A circle of closed representatives maps to a circle in the original complex. Hence there is a well-defined natural map $\eta _{M}:A(H^{0} C(M))$ to Phi(A(M)); for the adjoint quotient it respects products. No injection or surjection has been assumed to construct it. [F1, F4, step 2.1, construct, algebra]

4.1 For finite affine generation, A(M) is an HC bimodule with a good PBW filtration: the current-word reductions in F2 and the leading circle relations give a surjection $R_{M}=M/C_{2}(M)$ to $gr_{PBW}$ A(M); finitely many current-module generators make $R_{M}$ finite over S(g), hence the target is finite as well. Reweight by h/2 to obtain the good Kazhdan filtration K of F4. Step 1.1 is triangular in old energy and preserves Cartan weight, so it identifies this actual K with the state-weight filtration for the shifted Zhu space; no changed ideal is hidden in the reweighting. On the W side the analogous leading circle/star argument gives the surjection $R_{H^{0} C(M)}$ to $gr_{K}$ $A(H^{0} C(M))$. By F3, the first ring/module also surjects onto classical reduction of $R_{M}$ via its induced Li degree zero. By F4, classical reduction of the surjection $R_{M}$ to $gr_{K}$ A(M) is surjective and its target is $gr_{K}$ Phi(A(M)). Taking closed representatives shows that these maps form a commutative square: either route takes the same leading state, first modulo its C2 terms and then modulo the finite moment/ghost differential. Therefore $gr_{K}$ $\eta _{M}$ is surjective. Its target has the good bounded-below reduced filtration supplied by F4. Finite leading-symbol lifting proves $\eta _{M}$ surjective. [F1, F2, F3, F4, step 3.1, construct, algebra]

5.1 For the universal vacuum, the same composite is an isomorphism. Indeed $R_{W}=O(S)$ by F3, $R_{V^{k}}=S(g)$, and $R_{V^{k}}$ to $gr_{PBW}$ $A(V^{k})$ is the identity under F2. Finite HC strictness and F5 identify $gr_{K}$ Phi(U) with O(S) by the same actual invariant restriction. Consequently the composite $R_{W}$ to $gr_{K}$ A(W) to $gr_{K}$ Phi(U) is the identity on O(S), under the closed-symbol identification, not merely a comparison of dimensions. The first map is surjective; their composite being an isomorphism makes both maps isomorphisms. The filtrations on A(W) and $\Phi (U)=Z$ are bounded below, by positive W grading and the positive invariant degrees. Finite-degree lifting and the leading-symbol injectivity argument give the actual natural isomorphism $\eta _{univ}:A(W^{k})$ to Z. In particular this isomorphism is the map of step 3.1, not an abstract center identification with untracked lower terms. [F1, F2, F3, F4, F5, step 4.1, construct, algebra]

6.1 The surjectivity in step 4.1 extends to any loop-bounded M in the present class by filtered unions of finitely generated current submodules. Circle spaces, actual BRST degree-zero cohomology, and the finite Clifford complexes commute with this union on finite representatives. The same is true for the HC functor in F4 on such unions: both its quotient and its finite Chevalley cochain model have finite witnessing equations. In particular $\eta _{N}$ is surjective for the actual vacuum ideal, without assuming that this ideal is finitely generated. Right exactness in F3 gives $H^{0}$ C(N) to $W^{k}$ to $H^{0}$ C(V) to zero. Applying the right exact circle-space functor of F1 yields the top exact row $A(H^{0} C(N))$ to $A(W^{k})$ to A(H) to zero. The actual affine Zhu row is A(N) to U to U/J to zero; F4 makes its finite reductions the bottom exact row Phi(A(N)) to Phi(U) to Phi(U/J) to zero. Naturality of the closed-representative map gives their commuting vertical maps $\eta _{N}$, $\eta _{univ}$ and $\eta _{V}$. Since $\eta _{N}$ is onto and $\eta _{univ}$ is an isomorphism, the two images in the middle terms agree under $\eta _{univ}$, so their cokernels are isomorphic. This proves $\eta _{V}:A(H)$ to Phi(U/J). No left injection of $H^{0}$ C(N) was needed; negative quantum cohomology vanishing was not smuggled into this argument. [F1, F2, F3, F4, step 5.1, construct, algebra]

7.1 Finally right-n coinvariants of U/J are exactly Y/JY. F4 identifies their invariant space with Phi(U/J), and F5 identifies JY with Y times the actual central ideal Wh(JY). Thus $\operatorname{Wh}(Y/JY)=Z/\operatorname{Wh}(JY)$, with the normalizer-product algebra structure, not only as a vector space. Since all maps arose from multiplication of closed states, the $\eta _{V}$ just obtained is the claimed algebra isomorphism and agrees with $\eta _{univ}$ on the universal source. All occurrences of J are its actual image from A(N); no radical or highest-weight scalar polynomial was substituted. This proves the Statement. [F1, F4, F5, step 6.1, construct, algebra] ∎

## Convention and consumer boundary

The new-to-old translation used in the corrected-current induced-module lane
is the inverse of step 1.1. Including its ghost normal-order term shifts the
corrected Cartan by $+(k+h^{\vee})\rho^{\vee}$; the old-to-new map here has the opposite
shift. The natural eta map is therefore the one evaluated on that lane's
actual twisted top, rather than a new choice of central character. This
comparison concerns $H^{0}_{f}(V)$ itself. Identifying it with a specified simple
W quotient or establishing full rationality remains a separate consumer
argument; it is not part of the present algebra comparison.
