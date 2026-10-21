---
id: def-ip-tree-probing-experiment
kind: definition
title: "Finite-tree multicast loss experiments"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [def-statistical-experiment]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "R. Cáceres, N. Duffield, J. Horowitz, and D. Towsley, Multicast-Based Inference of Network-Internal Loss Characteristics, IEEE Transactions on Information Theory 45 (1999), 2462–2480"
      url: "https://www.kiskeya.net/ramon/work/pubs/toit99.pdf"
      locator: "§§2.1–2.3, PDF pp. 3–5: logical multicast-tree conventions, independent link-level Bernoulli losses, and receiver-outcome likelihood"
    - title: "E. Lawrence, G. Michailidis, and V. N. Nair, Statistical Inverse Problems in Active Network Tomography, IMS Lecture Notes–Monograph Series 54 (2007), 24–44"
      url: "https://arxiv.org/pdf/0708.1079"
      locator: "§§1–2, PDF pp. 1–4: known rooted logical tree, link-level Bernoulli variables, and path-product observations"
---

## Definition

A finite rooted directed tree $T=(V,E)$ has root $o$, with all edges directed away from $o$, and a nonempty receiver set $R$ consisting of every leaf other than $o$. Every nonroot internal vertex has at least two children. For a vertex $v$, its children are the vertices joined to $v$ by an outgoing edge; $P(o,v)$ is the unique edge set on the path from $o$ to $v$. The root may have any finite number of children.

A finite probe design is a nonempty finite family $\mathcal C=((C_d,N_d))_{d=1}^D$, where each receiver set $C_d$ is a nonempty subset of $R$ and each probe count $N_d$ is a positive integer. A singleton receiver set is a unicast scheme; a receiver set of size at least two is a multicast scheme. Its used edge set is $E_d=\bigcup_{r\in C_d}P(o,r)$.

For a link-success parameter vector $p=(p_e)_{e\in E}\in(0,1)^E$, each design $d$ and probe $j\in\{1,\ldots,N_d\}$ has mutually independent link-success variables $X_{e,d,j}\in\{0,1\}$ for $e\in E_d$, with $\Pr_p(X_{e,d,j}=1)=p_e$. The same $p_e$ applies in every design and probe (temporal homogeneity). The observed receiver indicator is
$$
Y_{r,d,j}=\prod_{e\in P(o,r)}X_{e,d,j}\qquad(r\in C_d).
$$

For $y\in\{0,1\}^{C_d}$ let
$$
\Omega_{d,y}=\left\{x\in\{0,1\}^{E_d}: y_r=\prod_{e\in P(o,r)}x_e\text{ for every }r\in C_d\right\},\qquad w_{p,d}(x)=\prod_{e\in E_d}p_e^{x_e}(1-p_e)^{1-x_e}.
$$
The one-probe outcome law is
$$
P_{p,d}(y)=\sum_{x\in\Omega_{d,y}}w_{p,d}(x).
$$
These probabilities sum to one because the sets $\Omega_{d,y}$ partition the finite link-state space and $\sum_{x\in\{0,1\}^{E_d}}w_{p,d}(x)=\prod_{e\in E_d}(p_e+(1-p_e))=1$. The complete experiment observes $N_d$ independent outcomes with law $P_{p,d}$ for each design, independently across designs. If the data are summarized by counts, $n_{d,y}\in\mathbb N_0$ is the number of probes in design $d$ with outcome $y$, and $\sum_y n_{d,y}=N_d$.

This is a finite statistical experiment: its parameter space is $(0,1)^E$ and its sampling law is the finite product of the stated receiver-outcome laws.

## Definition references

[[def-statistical-experiment|Statistical experiments]]

[Cáceres, Duffield, Horowitz, and Towsley, §§2.1–2.3](https://www.kiskeya.net/ramon/work/pubs/toit99.pdf)

[Lawrence, Michailidis, and Nair, §§1–2](https://arxiv.org/pdf/0708.1079)
