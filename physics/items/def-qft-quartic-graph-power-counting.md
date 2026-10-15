---
id: def-qft-quartic-graph-power-counting
kind: definition
title: Finite quartic graph and superficial scaling conventions
status: draft
origin: pipeline
domain: mathematics
deps:
  - def-multigraph-and-digraph-degrees-and-connectivity
dependency_roles:
  def-multigraph-and-digraph-degrees-and-connectivity: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Alexander M. Polyakov's QFT I course material, reconstructed and expanded by QFT.org, lesson 39: One-Loop Divergences and Power Counting"
      url: "https://qft.org/courses/qft-i/39-one-loop-divergences-and-power-counting/"
    - title: "Mark Srednicki, Quantum Field Theory, author-posted prepublication draft, §18, equations (18.2)–(18.8)"
      url: "https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf"
dependency_level: 0
---

## Definition

Let $D\in\mathbb Z_{\ge1}$ be the number of Euclidean momentum coordinates. Use the finite undirected multigraph convention of [[def-multigraph-and-digraph-degrees-and-connectivity]]: loops are allowed, distinct edges with the same endpoints are parallel, and connectedness here means that the underlying simple graph obtained by deleting loops and identifying each parallel class is connected.

A **finite quartic graph** is data $\Gamma=(\mathcal V,\mathcal E_{\rm int},\eta,\mathcal H_{\rm ext},(S_v)_{v\in\mathcal V},a)$ with the following properties. The vertex set $\mathcal V$ is finite and nonempty, the internal-edge set $\mathcal E_{\rm int}$ and external-half-edge set $\mathcal H_{\rm ext}$ are finite, and $\eta:\mathcal E_{\rm int}\times\{0,1\}\to\mathcal V$ assigns the two (unoriented, but separately labelled) ends of each internal edge to vertices. Its endpoint set is $\{\eta(e,0),\eta(e,1)\}$, a singleton for a loop; distinct elements of $\mathcal E_{\rm int}$ with the same unordered endpoints remain distinct parallel edges. The internal multigraph $(\mathcal V,\mathcal E_{\rm int},\eta)$ is connected in the sense just specified.

For every $v\in\mathcal V$, the incidence-slot set $S_v$ has exactly four elements. Set $\mathcal S:=\bigsqcup_{v\in\mathcal V}(\{v\}\times S_v)$. The attachment map

$$a:(\mathcal E_{\rm int}\times\{0,1\})\sqcup\mathcal H_{\rm ext}\longrightarrow\mathcal S$$

is a bijection, and for each internal end $(e,j)$ its slot has vertex coordinate $\eta(e,j)$. Thus the two ends of a loop occupy distinct slots. Each external half-edge $h\in\mathcal H_{\rm ext}$ is attached by $a(h)$ to exactly one vertex slot and has no second endpoint. In particular, each vertex has exactly four slots and every slot is used exactly once by an internal-edge end or an external half-edge. Write $V:=|\mathcal V|$, $I:=|\mathcal E_{\rm int}|$, and $E:=|\mathcal H_{\rm ext}|$.

Define the cycle rank and loop count by $L:=I-V+1$. For this mathematical power-counting convention, a single formal loop-momentum integration has assigned degree $+D$: for $\ell\in\mathbb R^D$, Lebesgue measure $d^D\ell$ acquires the factor $\lambda^D$ under $\ell\mapsto\lambda\ell$ for $\lambda>0$. The total loop contribution is defined to be $DL$, the cycle rank multiplied by this one-loop degree; no momentum routing or actual graph integral is part of this definition. Assign degree $-2$ to each internal scalar-propagator factor and degree $0$ to each quartic-vertex factor. For $q=(q_1,\ldots,q_D)\in\mathbb R^D\setminus\{0\}$ use the Euclidean norm $|q|^2:=\sum_{j=1}^Dq_j^2$. For example, if $m\ge0$, then $(|q|^2+m^2)^{-1}$ has assigned ultraviolet degree $-2$, since

$$\lim_{\lambda\to\infty}\lambda^2(|\lambda q|^2+m^2)^{-1}=|q|^{-2}.$$

The **superficial degree** of $\Gamma$ under this assignment is

$$\omega_D(\Gamma):=DL-2I.$$

By convention, $\omega_D(\Gamma)=0$ is called a **logarithmic superficial degree**. This is finite graph bookkeeping under the stated assignment. It does not by itself establish convergence or divergence of an actual graph integral; proper subgraphs, numerator cancellations, exceptional infrared data, and distributional singularities require separate hypotheses and analysis.
