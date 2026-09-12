---
id: "lem-relative-cohomological-kunneth-under-finite-free-homology-hypotheses"
kind: "lemma"
title: "Relative cohomological Kunneth under finite free homology hypotheses"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["lem-relative-singular-product-chain-equivalence-for-cw-pairs","lem-pid-complex-decomposes-into-two-term-cycle-boundary-pieces","thm-free-modules-are-projective-with-choice-boundary","def-relative-singular-cochain-complex","def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, §3.B p.276 relative quotient; §3.2 pp.216–219 cohomological
        comparison. Local algebra proves the exact finite-free homology version.
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume AC. Let $R$ be a commutative PID and $(X,A),(Y,B)$ CW pairs with supplied characteristic maps. Suppose $H_q(Y,B;R)$ is finite free over $R$ for every $q\ge0$. For every $n\ge0$, relative external product gives an isomorphism
$$\bigoplus_{p+q=n}H^p(X,A;R)\otimes_R H^q(Y,B;R)\xrightarrow{\ \sim\ }H^n(X\times Y,(A\times Y)\cup(X\times B);R).$$
The same conclusion holds instead when every $H_p(X,A;R)$ is finite free. This is a hypothesis on relative homology, with no bound on the nonzero degrees and no finite-rank hypothesis on singular chain groups. Products use the ordinary topology. AC is used only for the algebraic sections and bases in the proof; the external product and its chain comparison require no choice.

## Facts & Assumptions

[F1] [[lem-relative-singular-product-chain-equivalence-for-cw-pairs]] gives a chain homotopy equivalence $L:C_*(X\times Y,(A\times Y)\cup(X\times B);R)\to C_*(X,A;R)\otimes C_*(Y,B;R)$ through the AW quotient comparison. The relative external product is represented by $J(\varphi,\psi)L$, where $J$ is tensor evaluation with no extra sign.

[F2] [[lem-pid-complex-decomposes-into-two-term-cycle-boundary-pieces]] supplies, under AC, free cycles and boundaries of an arbitrary-rank nonnegative free PID complex and sections of its boundary maps onto their images.

[F3] [[thm-free-modules-are-projective-with-choice-boundary]] supplies a section of a surjection onto a free module by lifting its basis; a specified finite basis requires only finite choice.

[F4] [[def-relative-singular-cochain-complex]] defines positive coboundaries and the relative singular-simplex basis. For coefficient ring $R$, extending an integer functional by $R$-linearity identifies these cochains with $\operatorname{Hom}_R(C_*(-,-;R),R)$: both are exactly arbitrary $R$-valued functions on the complementary simplex basis.

[F5] [[def-axiom-of-choice]] permits the arbitrary-rank PID choices and simultaneous sections and finite bases across all degrees.

## Proof

**Given:** Put $C=C_*(X,A;R)$, $D=C_*(Y,B;R)$, $V_j=H_j(D)$ and let $V$ have zero differential. Both $C$ and $D$ are free in each nonnegative degree on the simplices not wholly in the subspace. Work first under the finite-free hypothesis on $V$.

1.1 For every $j$, choose $s_j:B_{j-1}D\to D_j$ with $d_js_j=1$ using [F2]. Set $s_0=0$ and $\pi_j=1-s_jd_j$, which takes values in $Z_jD$ since $d_js_jd_j=d_j$. Let $q_j:Z_jD\to V_j$ be the homology quotient. By [F3], choose a section $\ell_j:V_j\to Z_jD$ of $q_j$. Use [F5] for the simultaneous sections and for finite bases of all $V_j$. Define $\eta_j=q_j\pi_j$ and $b_j=\pi_j-\ell_j\eta_j$. The image of $b_j$ lies in $B_jD$ because applying $q_j$ gives zero. Also $\eta\ell=1$, $d\ell=0$, and $\eta d=0$: boundaries are fixed by $\pi$ and killed by $q$. Thus $\ell:V\to D$ and $\eta:D\to V$ are chain maps. [F2, F3, F5, given]

1.2 If $V_q$ has finite basis $e_1,\ldots,e_m$ and dual coordinates $e_i^*$, the evaluation map $$\operatorname{Hom}_R(T,R)\otimes V_q^*\longrightarrow\operatorname{Hom}_R(T\otimes V_q,R)$$ is an isomorphism for every $R$-module $T$. Its inverse takes $w$ to $\sum_{i=1}^m w(-\otimes e_i)\otimes e_i^*$. For one composite, substitute $v=\sum_i e_i^*(v)e_i$ into $w(t\otimes v)$; for the other substitute $\lambda=\sum_i\lambda(e_i)e_i^*$ and use tensor bilinearity. Both substitutions give the identity. The finite sum is the exact use of finite rank, and $T$ may have arbitrary rank or fail to be free. [given]

2.1 Put $h_j=s_{j+1}b_j$. Then $d_{j+1}h_j=b_j$. Since $d_j$ lands in boundaries, $\pi_{j-1}d_j=d_j$ and $\eta_{j-1}d_j=0$, so $b_{j-1}d_j=d_j$ and $h_{j-1}d_j=s_jd_j$. Therefore $$dh+hd=b+sd=1-\ell\eta,\qquad\eta\ell=1.$$ These are chain homotopy inverse identities, not only assertions about induced homology. They hold at degree zero with negative groups and maps set to zero. [step 1.1]

2.2 In total degree $n$, $\operatorname{Hom}_R((C\otimes V)_n,R)$ is the finite direct sum of $\operatorname{Hom}_R(C_{n-q}\otimes V_q,R)$, $0\le q\le n$. The differential preserves $q$ because $d_V=0$, and on each such complex it is the positive $C$ coboundary. Apply step 1.2 to identify the fixed-$q$ complex with $m$ copies of $\operatorname{Hom}_R(C,R)$ shifted up by $q$. Its cycles and boundaries are determined coordinatewise, so its degree-$n$ cohomology is $H^{n-q}(X,A;R)\otimes V_q^*$. This also describes the image of each pure tensor: it is the class of its evaluation functional. For $q=n$ the incoming degree-minus-one coordinate is zero, exactly as in relative $H^0$. Summing along the finite diagonal proves $$\bigoplus_{p+q=n}H^p(X,A;R)\otimes V_q^*\cong H^n\operatorname{Hom}_R(C\otimes V,R).$$ [F4, step 1.2]

3.1 On $C\otimes D$ set $H(c\otimes y)=(-1)^{|c|}c\otimes h(y)$ for homogeneous $c$. Expanding its tensor differential, the $dc\otimes hy$ terms in $dH+Hd$ have signs $(-1)^{|c|}$ and $(-1)^{|c|-1}$ and cancel. The remaining terms give $c\otimes(dh+hd)y$. Hence $1\otimes\eta$ and $1\otimes\ell$ are homotopy inverses between $C\otimes D$ and $C\otimes V$. For any chain homotopy $u-v=dH+Hd$, the cochain operator $K(\phi)=\phi H$ has degree minus one and satisfies $\delta K+K\delta=(u-v)^*$. This follows by evaluating on a chain: the two terms are $\phi Hd$ and $\phi dH$. Consequently these tensor homotopies and their duals need no exactness theorem for tensor or Hom. [F4, step 1.1, step 2.1]

3.2 Applying the same dual computation to step 2.1 gives $H^q(Y,B;R)\cong V_q^*$: $\lambda$ represents $[\lambda\eta_q]$, and the inverse is restriction along $\ell_q$. Indeed $\eta\ell=1$ gives one inverse identity, and precomposition by $h$ gives the other up to cochain homotopy. Since $V$ has zero differential, its cohomology after Hom is exactly $V^*$. [F4, step 1.1, step 2.1]

4.1 Compose $L$ of [F1] with $1\otimes\eta$. By step 3.1 this gives a chain homotopy equivalence from the product-pair chains to $C\otimes V$, and hence an isomorphism on dual cohomology. Combine it with step 2.2 and the identification in step 3.2. On representatives, $\varphi\otimes\lambda$ maps to $$[J(\varphi,\lambda)(1\otimes\eta)L]=[J(\varphi,\lambda\eta)L]=[\varphi]\times[\lambda\eta],$$ the actual relative external product by [F1]. Thus the isomorphism is the canonical product, independent of the bases and sections which proved its bijectivity. This identifies the map itself, rather than merely comparing abstract source and target modules. [F1, step 2.2, step 3.1, step 3.2]

5.1 Suppose instead $U_p=H_p(C)$ is finite free for every $p$. Apply the construction in steps 1.1 and 2.1 to $C$, obtaining $\ell,\eta,h$ there. On $C\otimes D$ use $h\otimes1$. The mixed terms in its homotopy identity have signs $(-1)^{|c|+1}$ and $(-1)^{|c|}$ and cancel, yielding $(1-\ell\eta)\otimes1$. Reduce the dual complex to $\operatorname{Hom}_R(U\otimes D,R)$. For fixed $p$ its differential is $(-1)^p$ times the $D$ coboundary, which has the same kernel and image because this sign is a unit. A finite basis $u_i$ of $U_p$ gives the inverse to evaluation by $w\mapsto\sum_i u_i^*\otimes w(u_i\otimes-)$. The two substitutions in step 1.2 now give its inverse identities with the factors in this order. Taking finite degree diagonals and dualizing the deformation identifies its cohomology with $\bigoplus_{p+q=n}U_p^*\otimes H^q(Y,B;R)$. A representative maps through $L$ to $J(\lambda\eta,\psi)L$, the same ordered external product by [F1]. This proves the symmetric assertion with no appeal to commutativity of external product. [F1, F4, step 1.1, step 1.2, step 2.1, step 2.2, step 3.1, step 4.1]

6.1 Empty spaces or full subspaces make the corresponding relative complex zero and the displayed map the isomorphism between zero modules. Empty subspaces recover the absolute comparison for CW spaces. Rank zero in step 1.2 means the empty inverse sum; rank one gives one copy of the other complex. In degree zero the only summand is $(p,q)=(0,0)$ and evaluation multiplies vertex values. Unnormalized degenerate simplices remain in the free chain bases; no finite-rank assertion about those bases occurs. Infinitely many nonzero $V_q$ or $U_p$ cause no problem: every fixed total degree involves only finitely many, so no interchange of an infinite product with a tensor is used. A PID has $1\ne0$; the zero-ring case is outside that hypothesis, though all the displayed groups would be zero. AC occurs in [F2]'s arbitrary-rank cycle/boundary freeness and sections and in step 1.1's simultaneous homology sections and finite bases; it is not invoked in [F1] or the product formula. [F1, F2, F5, step 1.1, step 1.2, step 2.1, step 2.2, step 4.1, step 5.1] ∎
