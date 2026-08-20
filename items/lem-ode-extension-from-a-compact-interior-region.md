---
id: lem-ode-extension-from-a-compact-interior-region
kind: lemma
title: "A solution whose graph approaches a compact interior region at a finite endpoint extends past that endpoint"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-picard-lindelof-local-existence-and-uniqueness, lem-locally-unique-ode-solutions-agree-and-glue-on-overlaps, cor-bolzano-weierstrass-in-rn, thm-extreme-value-metric, thm-heine-borel-rn, thm-norm-inequality-for-the-vector-valued-integral]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems, Ch. 2"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "Jiri Lebl, Basic Analysis I, Section 6.3"
      url: "https://jirilebl.github.io/ra/realanal.pdf"
pipeline_run: null
---

## Statement

Let $x:(\alpha,\beta)\to\mathbb R^n$ solve a Picard-Lindelof ODE and suppose $\beta<\infty$. If there are $t_j\uparrow\beta$ for which $(t_j,x(t_j))$ lies in one compact subset $K$ of the open ODE domain, then $x$ extends to a solution beyond $\beta$. A solution whose graph has a sequence approaching a compact interior endpoint state extends past that endpoint. The reflected statement holds at a finite left endpoint.

## Facts & Assumptions

**Given:** The solution, finite endpoint, compact set, and sequence in the Statement.

[L1] A bounded sequence in $\mathbb R^n$, $n\ge1$, has a convergent subsequence ([[cor-bolzano-weierstrass-in-rn]]).

[L2] For an integrable vector-valued function on $[a,b]$ with $a\le b$, $\left\|\int_a^b f\right\|_2\le\int_a^b\|f\|_2$ ([[thm-norm-inequality-for-the-vector-valued-integral]]).

[L3] Picard-Lindelöf gives a unique local solution through each point of the open ODE domain ([[thm-picard-lindelof-local-existence-and-uniqueness]]).

[L4] Locally unique solutions agreeing at a common endpoint glue to a solution on the union interval ([[lem-locally-unique-ode-solutions-agree-and-glue-on-overlaps]]).

[L5] A subset of Euclidean space is compact if and only if it is closed and bounded ([[thm-heine-borel-rn]]).

## Proof

**Proof technique:** direct.

1.1 Compactness makes the sequence of graph points $(t_j,x(t_j))$ bounded, so [L1] in $\mathbb R^{n+1}$ gives a subsequence converging to $(\beta,p)$; [L5] makes $K$ closed, hence $(\beta,p)\in K$ and lies in the interior of the ODE domain. [given, L1, L5]

2.1 Choose a compact cylinder about $(\beta,p)$ inside the ODE domain and let $M$ bound the field there; for large $j$, $x(t_j)$ lies within half its state radius and $M(\beta-t_j)$ is smaller than the remaining half, so a first-exit argument using [L2] keeps the whole tail in that cylinder and gives $x(t)\to p$; [L3] starts a solution at $(\beta,p)$ and [L4] glues it to $x$ past $\beta$, with $M=0$ immediate. [step 1.1, L2, L3, L4] ∎
