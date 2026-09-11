---
id: "lem-loxodromic-elements-have-north-south-boundary-dynamics"
kind: "lemma"
title: "Loxodromic elements have north south boundary dynamics"
deps: ["def-hg-toolkit-loxodromics-and-independent-poles", "lem-boundary-products-are-independent-of-representative-and-basepoint", "def-hg-toolkit-slim-triangles-products-and-four-point-constants", "lem-infinite-order-elements-have-positive-stable-translation-length"]
provenance:
  statement: "ai-altered"
  proof: "ai-generated"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Canary Proposition 5.1 pp.25–26 and Theorem 5.7 pp.28–29; complete convergence-action proof"
      url: "https://websites.umich.edu/~canary/lecnotespublic.pdf"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For an infinite-order element $g$ of a finitely generated hyperbolic group and neighbourhoods $U_+,U_-$ of its positive and negative poles, there is an integer $N$ such that
$$g^n(\partial G\setminus U_-)\subseteq U_+,\qquad g^{-n}(\partial G\setminus U_+)\subseteq U_-\qquad(n\ge N).$$
The proof is choice-free. In fact the same assertion holds for every loxodromic isometry of a metric space satisfying the product condition.

## Facts & Assumptions

**Given:** Such an isometry, a basepoint $o$, a product constant $\kappa\ge0$, its poles $p_+,p_-$, and their two neighbourhoods.

[F1] Loxodromic poles, their distinctness and the isometry action on boundary classes are well-defined. The explicit orbit-chain verification gives positive stable length and joint product estimates without properness or AC ([[def-hg-toolkit-loxodromics-and-independent-poles]]).

[F2] Write $B$ for the supremal boundary product at $o$. Every representing pair has mixed joint liminf at most $B$. The sets $U_R(p)=\{\xi:B(\xi,p)>R\}$ form a neighbourhood base at $p$ ([[lem-boundary-products-are-independent-of-representative-and-basepoint]]).

[F3] The metric product formula and product inequality hold at every basepoint ([[def-hg-toolkit-slim-triangles-products-and-four-point-constants]]).

[F4] Every infinite-order element of the stated hyperbolic group is loxodromic ([[lem-infinite-order-elements-have-positive-stable-translation-length]]).

## Proof

1.1 Put $z_n=g^no$, $w_n=g^{-n}o$ and $a_n=d(o,z_n)=d(o,w_n)$. By the quantitative conclusion in F1, choose $\tau>0$, an integer $s\ge1$ and $C\ge0$ such that $a_n\ge n\tau$ and, for every $m\ge n\ge s$, $$(z_n|z_m)_o\ge a_n-C,\qquad (w_n|w_m)_o\ge a_n-C.$$ Thus each pole's canonical sequence has product with its corresponding $n$th orbit point at least $a_n-C$ on its tail. [F1]

1.2 For any Gromov sequence $(u_j)$ and fixed $v\in X$, put $b_v(u)=\liminf_j(u_j|v)_o$. It is finite in $[0,d(o,v)]$. For all sufficiently large $i,j$, the Gromov property gives $(u_i|u_j)_o>d(o,v)+\kappa$. Since $(u_j|v)_o\le d(o,v)$, F3 yields $(u_i|v)_o\ge(u_j|v)_o-\kappa$. Interchanging $i,j$ bounds every difference on that tail by $\kappa$. Taking tail infima and suprema therefore gives $\limsup_j(u_j|v)_o\le b_v(u)+\kappa$. This argument uses only bounded real sequences. [F3, given, algebra]

2.1 For representing sequences $u$ and $v$ and an interior point $x$, apply F3 with bridge $x$. For every $\varepsilon>0$, all sufficiently late products $(u_i|x)_o$ and $(v_j|x)_o$ are at least $b_x(u)-\varepsilon$ and $b_x(v)-\varepsilon$. Thus their joint liminf satisfies $P(u,v)\ge\min\{b_x(u),b_x(v)\}-\kappa$ after letting $\varepsilon$ decrease to zero. This is a joint tail estimate; neither boundary class nor the bridge point is being selected simultaneously for a family. [step 1.2, F3, algebra]

3.1 Choose $R,T\ge0$ with $U_R(p_-)\subseteq U_-$ and $U_T(p_+)\subseteq U_+$, using F2 and increasing the two thresholds to zero if necessary. For any $\xi\notin U_-$ we have $B(\xi,p_-)\le R$. Fix any representing sequence $u$ of this one class. For $n\ge s$ with $a_n-C>R+\kappa$, step 1.1 gives $b_{w_n}(w)\ge a_n-C>R+\kappa$ for the canonical negative orbit $w$. By step 2.1 and F2, $R\ge P(u,w)\ge\min\{b_{w_n}(u),b_{w_n}(w)\}-\kappa$. The second entry exceeds $R+\kappa$, hence $b_{w_n}(u)\le R+\kappa$. Step 1.2 now gives $\limsup_j(u_j|w_n)_o\le R+2\kappa$. This bound is uniform in every class outside $U_-$, although its individual sequence tail cutoff need not be uniform. [step 1.1, step 1.2, step 2.1, F2, algebra]

4.1 The product formula and isometry identities give exactly $(g^nu_j|z_n)_o=a_n-(u_j|w_n)_o$. Taking liminf and using step 3.1 yields $b_{z_n}(g^nu)\ge a_n-R-2\kappa$. The image sequence represents $g^n\xi$ by F1. Step 1.1 gives $b_{z_n}(z)\ge a_n-C$ for the canonical positive orbit. Applying step 2.1 with bridge $z_n$ therefore gives $$B(g^n\xi,p_+)\ge P(g^nu,z)\ge a_n-\max\{R+2\kappa,C\}-\kappa.$$ All expressions involving an interior point are finite, so no subtraction of infinite boundary products has occurred. [step 3.1, step 1.1, step 2.1, F1, F2, F3, algebra]

5.1 Choose $N_+\ge s$ so large that $N_+\tau>C+R+\kappa$ and $N_+\tau>T+\max\{R+2\kappa,C\}+\kappa$. Then for every $n\ge N_+$ we have both the hypothesis of step 3.1 and $B(g^n\xi,p_+)>T$ in step 4.1, for every $\xi\notin U_-$. Hence $g^n(\partial X\setminus U_-)\subseteq U_T(p_+)\subseteq U_+$. The integer is chosen from constants independent of $\xi$; there is no appeal to pointwise convergence to claim uniformity. [step 1.1, step 3.1, step 4.1, algebra]

6.1 The inverse isometry is loxodromic, with poles interchanged, the same sequence of lengths $a_n$, and the same orbit constants in step 1.1. Apply step 5.1 to $g^{-1}$, now using the excluded neighbourhood $U_+$ and the target neighbourhood $U_-$. This supplies $N_-$ such that $g^{-n}(\partial X\setminus U_+)\subseteq U_-$ for all $n\ge N_-$. Taking $N=\max(N_+,N_-)$ gives both inclusions for the same tail. [step 5.1, step 1.1, F1, algebra]

7.1 F4 and the boundary/isometry conventions in F1 specialize the result to the given group. If one excluded complement is empty its inclusion is automatic; the uniform proof also covers singleton complements, including a boundary consisting only of the two poles. The constants permit $\kappa=0$, and $\tau>0$ is the only quantity whose positivity is needed to choose large integers. Each argument fixes at most one representative of one given class; the final bound is independent of that representative and class. Only finitely many threshold witnesses are used. Thus neither AC, proper-ray selection, compactness, the general quasi-isometry extension theorem nor Morse stability is used. [step 5.1, step 6.1, F1, F4, given] ∎
