---
id: "lem-boundary-products-are-independent-of-representative-and-basepoint"
kind: "lemma"
title: "Boundary products have controlled representative and basepoint dependence"
deps: ["lem-asymptotic-gromov-sequences-form-an-equivalence-relation"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Druţu–Kapovich §9.9, ray topology; sequence-product comparison requires additional full treatment"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Suppose $X$ satisfies the product condition with constant $\kappa\ge0$, and use its Gromov-sequence boundary. For any representing sequences $x\in\xi,y\in\eta$, write $P_o(x,y)=\liminf_{n,m}(x_n|y_m)_o$ and $B_o(\xi,\eta)=(\xi|\eta)_o$. If finite, these satisfy
$$ B_o(\xi,\eta)-2\kappa\le P_o(x,y)\le B_o(\xi,\eta). $$
Infinite value for either is equivalent to $\xi=\eta$, and then both are infinite for every pair of representatives. Products at basepoints $o,o'$ differ by at most $d(o,o')$, understood as two inequalities in the extended nonnegative reals. Moreover
$$B_o(\xi,\zeta)\ge\min\{B_o(\xi,\eta),B_o(\eta,\zeta)\}-3\kappa.$$
For real $R$ put $U_R(\xi)=\{\eta:B_o(\xi,\eta)>R\}$. Declare $O$ open when each $\xi\in O$ has some $U_R(\xi)\subseteq O$. This gives a Hausdorff topology, independent of the basepoint and of replacing supremal products by any supplied representative products. Each $U_R(\xi)$ is a neighbourhood, though it need not be open.

## Facts & Assumptions

**Given:** The product inequality with constant $\kappa$, and the preceding definitions of joint liminf and supremal boundary product.

[F1] Gromov-sequence equivalence and its basepoint independence are proved in [[lem-asymptotic-gromov-sequences-form-an-equivalence-relation]].

## Proof

1.1 For representatives $x\sim x'$ and $y\sim y'$, two applications of the product inequality give $$(x'_n|y'_m)_o\ge\min\{(x'_n|x_i)_o,(x_i|y_j)_o,(y_j|y'_m)_o\}-2\kappa.$$ Fix any finite $A<P_o(x,y)$. By joint liminf, all three entries exceed $A$ when all four indices are sufficiently large: for the first and third use F1 equivalence and for the second use the tail infimum definition. Fix $i,j$ at that common cutoff and let $n,m$ vary over its tail. Then $P_o(x',y')\ge A-2\kappa$. Letting $A$ increase to a finite $P_o(x,y)$ gives $P_o(x',y')\ge P_o(x,y)-2\kappa$; if the latter is infinite, every finite threshold holds and $P_o(x',y')$ is infinite. Interchanging the pairs proves the reverse comparison. [F1, given, algebra]

1.2 At two basepoints, expanding products gives $|(x_n|y_m)_o-(x_n|y_m)_{o'}|\le D=d(o,o')$ by the two reverse triangle inequalities. Taking each tail infimum, then its supremum, preserves both inequalities; taking the supremum over the same representing classes does so again. F1 identifies those classes at both basepoints. Thus $B_o\le B_{o'}+D$ and $B_{o'}\le B_o+D$, including infinite values. [F1, given, algebra]

2.1 Taking the supremum over $x',y'$ in step 1.1 yields the displayed $2\kappa$ estimate whenever the supremum is finite. If the supremum is infinite, for each finite $T$ some representative pair has product greater than $T+2\kappa$; the same comparison forces the fixed pair's product at least $T$. Thus its product is infinite. Infinite joint liminf is exactly mixed divergence, hence by F1 equality of the classes. Conversely equality of the classes is mixed divergence for every representative pair and gives infinite product. This proves all extended-value assertions without subtracting infinities. [step 1.1, F1, given]



3.1 Fix three representatives $x,y,z$. For finite $A<P_o(x,y)$ and $E<P_o(y,z)$, a common cutoff and one fixed bridge index give $(x_n|z_m)_o>\min\{A,E\}-\kappa$ on the whole tail. Therefore $P_o(x,z)\ge\min\{P_o(x,y),P_o(y,z)\}-\kappa$, interpreted through all finite thresholds if necessary. Step 2.1 bounds the two products on the right below by their supremal products minus $2\kappa$. Since $B_o(\xi,\zeta)\ge P_o(x,z)$, the displayed boundary inequality follows with $C=3\kappa$. The same finite-threshold argument handles two infinite entries. [step 2.1, given, algebra]

4.1 Write $B=B_o$ and $C=3\kappa$. We have $\xi\in U_R(\xi)$ and $U_S(\xi)\subseteq U_R(\xi)$ for $S\ge R$ by step 2.1. If $\eta\in U_{R+C+1}(\xi)$ and $\zeta\in U_{R+C+1}(\eta)$, step 3.1 gives $B(\xi,\zeta)>R$, so $U_{R+C+1}(\eta)\subseteq U_R(\xi)$. The declared open sets include the empty set and whole boundary, are closed under arbitrary unions, and under finite intersections by using the larger threshold at each point. Thus they form a topology. [step 2.1, step 3.1, given]

5.1 To verify that threshold sets really are neighbourhoods, let $V$ be any set and put $V^*=\{\eta:\text{some }U_T(\eta)\subseteq V\}$. This is a subset of $V$. If $U_T(\eta)\subseteq V$, step 4.1 shows that every $\zeta\in U_{T+C+1}(\eta)$ has $U_{T+C+1}(\zeta)\subseteq U_T(\eta)\subseteq V$, so $U_{T+C+1}(\eta)\subseteq V^*$. Thus $V^*$ is open. Take $V=U_R(\xi)$. Step 4.1 shows $U_{R+C+1}(\xi)\subseteq V^*\subseteq U_R(\xi)$. This proves the asserted neighbourhood and interior refinement. [step 4.1]

6.1 If $\xi\ne\eta$, step 2.1 gives $B(\xi,\eta)<\infty$. Choose $R>B(\xi,\eta)+C$. No point belongs to both $U_R(\xi)$ and $U_R(\eta)$, since step 3.1 would force $B(\xi,\eta)>R-C$. Step 5.1 supplies disjoint open neighbourhoods inside these two sets. Hence the topology is Hausdorff. [step 2.1, step 3.1, step 5.1]

7.1 By step 1.2, $U^{o'}_{R+D}(\xi)\subseteq U^o_R(\xi)$ and the symmetric inclusion holds. These cofinal inclusions show that exactly the same sets are open at either basepoint. For any supplied representatives define $V_R(\xi)$ using their mixed liminf. Step 2.1 gives $U_{R+2\kappa}(\xi)\subseteq V_R(\xi)\subseteq U_R(\xi)$, with equality of the infinite-value cases. This again yields the same open-set criterion in both directions. No simultaneous representative selection is needed for these assertions: they hold for every selection if one is supplied. Empty and singleton boundaries satisfy the same construction, and $\kappa=0$ causes no exceptional division. [step 2.1, step 1.2, step 5.1, step 6.1] ∎
