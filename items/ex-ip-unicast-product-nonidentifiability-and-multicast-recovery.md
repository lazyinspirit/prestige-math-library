---
id: ex-ip-unicast-product-nonidentifiability-and-multicast-recovery
kind: example
title: "Unicast products lose link identifiability; multicast restores it"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps: [def-ip-tree-probing-experiment]
justified_by: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "E. Lawrence, G. Michailidis, and V. N. Nair, Statistical Inverse Problems in Active Network Tomography, IMS Lecture Notes–Monograph Series 54 (2007), 24–44"
      url: "https://arxiv.org/pdf/0708.1079"
      locator: "§1, Examples 1–2, PDF pp. 1–2 (printed pp. 25–26)"
    - title: "B. Xi, G. Michailidis, and V. N. Nair, Estimating Network Loss Rates Using Active Tomography, Journal of the American Statistical Association 101 (2006), 1430–1448"
      url: "https://www.stat.purdue.edu/~xbw/research/xi_tomo_jasa1206.pdf"
      locator: "§3.2, two-leaf design discussion, PDF p. 5 (printed p. 1434)"
---

## Example

Let a rooted tree have root $o$, one shared link $e_0=(o,v)$, and two branch links $e_1=(v,r_1)$ and $e_2=(v,r_2)$ to leaf receivers $r_1,r_2$. Their success probabilities are $p_0,p_1,p_2\in(0,1)$. Compare separate unicast designs to $r_1$ and $r_2$ with a multicast design that sends each probe to both receivers and records both outcomes. For any fixed positive probe counts, the distinct parameter vectors $(1/2,1/2,1/4)$ and $(1/3,3/4,3/8)$ give the same separate-unicast laws but different multicast laws. In fact, the multicast law identifies all three link probabilities for every interior parameter vector.

The diagram labels each edge by its link-success probability; the two rightmost vertices are the receivers.

```tikz
\begin{tikzpicture}[>=stealth]
  \node[circle,draw] (o) at (0,1.5) {$o$};
  \node[circle,draw] (v) at (2,1.5) {$v$};
  \node[circle,draw] (r1) at (4,2.5) {$r_1$};
  \node[circle,draw] (r2) at (4,0.5) {$r_2$};
  \draw[->] (o) -- node[above] {$p_0$} (v);
  \draw[->] (v) -- node[above] {$p_1$} (r1);
  \draw[->] (v) -- node[below] {$p_2$} (r2);
\end{tikzpicture}
```

## Example references

[[def-ip-tree-probing-experiment|Finite-tree multicast loss experiments]]

[Lawrence, Michailidis, and Nair, Examples 1–2](https://arxiv.org/pdf/0708.1079)

[Xi, Michailidis, and Nair, §3.2](https://www.stat.purdue.edu/~xbw/research/xi_tomo_jasa1206.pdf)

## Facts & Assumptions

**Given:** The three-edge tree and the two interior parameter vectors in the example. Link successes are independent across links and probes; unicast outcomes are observed separately, whereas a multicast probe records both receiver indicators.

[F1] [[def-ip-tree-probing-experiment]]: For receiver $r$, its success indicator is the product of the link-success variables on its root path.

[F2] [[def-ip-tree-probing-experiment]]: A singleton receiver set is a unicast scheme; a receiver set of size at least two is a multicast scheme.

[F3] [[def-ip-tree-probing-experiment]]: The complete experiment observes $N_d$ independent outcomes with law $P_{p,d}$ for each design, independently across designs.

## Verification


1.1 Under unicast to $r_i$, success has probability $p_0p_i$. Both parameter vectors give $p_0p_1=1/4$ and $p_0p_2=1/8$. Independence across probes makes each unicast outcome sequence have the same Bernoulli-product law under both vectors, and the separate schemes therefore have the same joint law. [given, F1, F2, F3, algebra]

1.2 Under multicast, the receiver marginals are $m_1=p_0p_1=1/4$ and $m_2=p_0p_2=1/8$, while the joint success probability is $m_{12}=p_0p_1p_2$. It is $1/16$ for the first vector and $3/32$ for the second, so their multicast laws differ. [given, F1, F2, F3, algebra]

2.1 For any interior vector, the multicast law supplies $m_1,m_2,m_{12}$, with $m_{12}>0$. The equations give $p_0=m_1m_2/m_{12}$, $p_1=m_1/p_0$, and $p_2=m_2/p_0$. Thus the multicast law determines every link probability. [given, F1, algebra] ∎
