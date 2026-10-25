---
id: thm-ip-flexicast-link-loss-identifiability
kind: theorem
title: "Link-loss identifiability from split and coverage"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-ip-tree-probing-experiment
  - def-ip-network-tomography-design-criterion
  - def-identifiability-of-an-estimand
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "B. Xi, G. Michailidis, and V. N. Nair, Estimating Network Loss Rates Using Active Tomography, Journal of the American Statistical Association 101 (2006), 1430–1448"
      url: "https://www.stat.purdue.edu/~xbw/research/xi_tomo_jasa1206.pdf"
      locator: "§3.2 Proposition 1 and Appendix A.1, PDF pp. 5 and 16–17 (printed pp. 1434 and 1445–1446)"
    - title: "E. Lawrence, G. Michailidis, and V. N. Nair, Statistical Inverse Problems in Active Network Tomography, IMS Lecture Notes–Monograph Series 54 (2007), 24–44"
      url: "https://arxiv.org/pdf/0708.1079"
      locator: "§3.1, PDF pp. 5–6 (printed pp. 28–29), reported split/coverage criterion and its exact model scope"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Let $T=(V,E)$ and $\mathcal C=((C_d,N_d))_{d=1}^D$ be a finite-tree multicast loss experiment with parameter space $(0,1)^E$, independent link successes, and the same link probabilities in every probe. Let $\mathsf L(p):=\bigotimes_{d=1}^D P_{p,d}^{\otimes N_d}$ be the full repeated-probe sampling law determined by the one-probe outcome laws $P_{p,d}$. Then $\mathsf L$ is injective if and only if $\mathcal C$ satisfies the split/coverage condition.

## Statement references

[[def-ip-tree-probing-experiment|Finite-tree multicast loss experiments]]

[[def-ip-network-tomography-design-criterion|Split and coverage condition]]

[[def-identifiability-of-an-estimand|Identifiability of an estimand]]

[Xi, Michailidis, and Nair, §3.2 Proposition 1 and Appendix A.1](https://www.stat.purdue.edu/~xbw/research/xi_tomo_jasa1206.pdf)

[Lawrence, Michailidis, and Nair, §3.1](https://arxiv.org/pdf/0708.1079)

## Facts & Assumptions

**Given:** A finite rooted tree and finite family of probe designs as specified in the tree-experiment definition, with $p_e\in(0,1)$ for every edge and $N_d\ge1$ for every design. Prove that the full sampling-law map is injective exactly when every receiver is covered and every nonroot internal vertex is split by some design.

[F1] [[def-ip-tree-probing-experiment]]: For each design, link successes are independent Bernoulli variables with fixed probabilities $p_e\in(0,1)$, the observed receiver success is the product on its root path, and the full outcome vector has the finite law $P_{p,d}$.

[F2] [[def-ip-network-tomography-design-criterion]]: Coverage means every leaf receiver belongs to some $C_d$; a nonroot internal vertex is split when a single $C_d$ meets two distinct child subtrees.

[F3] [[def-identifiability-of-an-estimand]]: The identity target on the parameter set is identifiable exactly when equality of sampling laws implies equality of the parameter vectors, equivalently when the parameter-to-law map is injective.

## Proof


1.1 For each vertex $v$, put $q_v=\prod_{e\in P(o,v)}p_e$, with $q_o=1$. Because $N_d\ge1$, the repeated-probe law for design $d$ has one-probe marginal $P_{p,d}$; conversely, equality of all one-probe laws gives equality of $\mathsf L(p)$. For each covered leaf $r$, the marginal success probability read from any design containing $r$ is $m_r=\Pr_p(Y_r=1)=q_r$. Thus equality of experiment laws determines every $q_r$ when all receivers are covered. [given, F1, F2, algebra]

1.2 If a receiver $r$ is uncovered, its terminal edge $e=(u,r)$ occurs in no observed path. Changing $p_e$ to a different value in $(0,1)$ leaves every observed outcome law unchanged, because $r$ is a leaf and no other receiver path uses $e$. The parameter-to-law map is then not injective. [given, F1, F2, construct, algebra]

1.3 Suppose a nonroot internal vertex $v$ is not split by any design. Let $e_0=(u,v)$ be its incoming edge and let $e_c=(v,c)$ range over its child edges. Since $p_{e_0}<1$ and each of the finitely many $p_{e_c}<1$, an open interval around $1$ keeps $tp_{e_0}<1$ and $p_{e_c}/t<1$ for every child; all changed probabilities remain positive there. Choose $t\ne1$ in that interval. Define $p'_{e_0}=tp_{e_0}$ and $p'_{e_c}=p_{e_c}/t$, leaving every other probability fixed. Then $p'_{e_0}p'_{e_c}=p_{e_0}p_{e_c}$ for every child $c$. In each design, receivers below $v$, if any, lie in one child subtree $c$; their outcomes all contain the common factor $B=X_{e_0}X_{e_c}$. This factor is Bernoulli with the same success probability under $p$ and $p'$, and is independent of every other link variable. Receivers outside that child subtree use no changed edge; their possible shared ancestor variables remain unchanged and independent of $B$. Thus the joint receiver-outcome law for every design is unchanged, although $p'\ne p$. [given, F1, F2, choose, construct, algebra]

2.1 Let $v$ be a nonroot internal vertex. By [F2], some design contains receivers $r,s$ in distinct child subtrees of $v$; since $T$ is a tree their last common vertex on the root paths is $v$. Write $a_r=\prod_{e\in P(v,r)}p_e$ and $a_s=\prod_{e\in P(v,s)}p_e$. Independence in [F1] gives $m_r=q_va_r$, $m_s=q_va_s$, and $m_{rs}:=\Pr_p(Y_r=Y_s=1)=q_va_ra_s$. All factors are positive, so $m_{rs}>0$ and $q_v=m_rm_s/m_{rs}$. Hence the law determines $q_v$ for every nonroot internal vertex. [given, F1, F2, step 1.1, choose, algebra]

3.1 The value $q_o=1$ is fixed; steps 1.1 and 2.1 determine $q_v$ for every other vertex. For each edge $e=(u,v)$, $p_e=q_v/q_u$, with $q_u>0$. Therefore equal experiment laws give equal $p_e$ on every edge, so $\mathsf L$ is injective. By [F3], the link-probability identity target is identifiable. [given, F1, F3, step 1.1, step 2.1, algebra]

4.1 If the split/coverage condition fails, either a receiver is uncovered or a nonroot internal vertex is not split. Steps 1.2 and 1.3 give two distinct parameter vectors with the same full sampling law in either case. Thus injectivity of $\mathsf L$ implies the condition; together with step 3.1 this proves the equivalence. [F2, F3, step 1.2, step 1.3, step 3.1, algebra] ∎


## Remarks

The fork below is a concrete experiment with receivers $R=\{r,s\}$ and one design $C_1=\{r,s\}$, repeated any positive number $N_1$ of times. Both receivers are covered, and the design splits the only nonroot internal vertex $v$. Every arrow is one tree edge directed away from the root $o$; its label is its link-success probability.

```tikz
\begin{tikzpicture}[>=stealth, every node/.style={font=\small}]
\node (o) at (0,0) {$o$};
\node (v) at (0,-1.4) {$v$};
\node (r) at (-1.8,-2.8) {$r$};
\node (s) at (1.8,-2.8) {$s$};
\draw[->] (o) -- node[right] {$q_v=p_{(o,v)}$} (v);
\draw[->] (v) -- node[above left] {$a_r=p_{(v,r)}$} (r);
\draw[->] (v) -- node[above right] {$a_s=p_{(v,s)}$} (s);
\node at (0,-3.5) {$C_1=\{r,s\}$};
\end{tikzpicture}
```

For one probe of this design, $Y_r=X_{(o,v)}X_{(v,r)}$ and $Y_s=X_{(o,v)}X_{(v,s)}$. Independence therefore gives $m_r=q_va_r$, $m_s=q_va_s$, and $m_{rs}=q_va_ra_s$: the shared edge must succeed only once for both receivers to succeed. Thus $q_v=m_rm_s/m_{rs}$, as in step 2.1. All three factors lie in $(0,1)$; after recovering $q_v$, the two remaining link probabilities are $a_r=m_r/q_v$ and $a_s=m_s/q_v$. The general proof above uses whole path products in place of these single-edge products and remains independent of this illustration.
