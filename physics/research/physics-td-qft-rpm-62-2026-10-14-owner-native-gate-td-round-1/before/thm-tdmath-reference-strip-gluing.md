---
id: thm-tdmath-reference-strip-gluing
kind: theorem
title: Reference-strip gluing proves comparison for scaled copies
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 10
deps: [def-tdmath-forward-sector-hypotheses, def-tdmath-thermal-contact-hypotheses, def-tdmath-forward-signed-comparison, lem-tdmath-forward-spectator-cancellation, lem-tdmath-reference-strip-coordinate, thm-tdmath-sector-nesting, thm-tdmath-forward-boundary-graph, thm-heine-borel-rn]
dependency_roles:
  def-tdmath-forward-sector-hypotheses: mathematical-premise
  def-tdmath-thermal-contact-hypotheses: mathematical-premise
  def-tdmath-forward-signed-comparison: mathematical-premise
  lem-tdmath-forward-spectator-cancellation: mathematical-premise
  lem-tdmath-reference-strip-coordinate: mathematical-premise
  thm-tdmath-sector-nesting: mathematical-premise
  thm-tdmath-forward-boundary-graph: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, Theorem 4.4 and Lemma 4.1, pp. 54–56"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, Chapters 2 and 4, complete 607-page edition"
      url: "https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf"
verification:
  precheck: n/a
---

## Statement

Assume [[def-tdmath-forward-sector-hypotheses]] and T1–T4 of [[def-tdmath-thermal-contact-hypotheses]] for every finite join. For any one simple type $\Gamma_i$, every two finite compounds of its scaled copies with the same total coefficient mass are comparable. Thus CH holds on all multiple scaled products of that type. No entropy across different material types is asserted here.

## Facts & Assumptions

**Given:** The stated forward-sector and thermal-contact hypotheses; every thermal join remains a simple domain with these hypotheses.

[A1] [[def-tdmath-forward-sector-hypotheses]]: A1–A7, S1–S3, and the tagged finite-compound conventions hold, without an assumed CH.

[A2] [[def-tdmath-thermal-contact-hypotheses]]: T1–T4 provide simple thermal joins, reversible equilibrium splits, thermal scaling, and a thermal endpoint pair surrounding each state.

[F1] [[lem-tdmath-reference-strip-coordinate]]: every state in a strip with strict thermally equivalent endpoints is equivalent to a unique reference mixture with parameter in $(0,1)$.

[F2] [[thm-tdmath-sector-nesting]]: one-copy comparisons hold on each finite join domain; strict comparison is interior membership, and forward sectors are nested.

[F3] [[def-tdmath-forward-signed-comparison]] and [[lem-tdmath-forward-spectator-cancellation]]: signed comparison is defined from positive/negative parts; it is translation invariant, additive, and cancellable under A1–A6.

[F4] [[thm-tdmath-forward-boundary-graph]]: each simple domain has one constant fixed-work energy orientation; arbitrarily close states on a vertical segment are strictly ordered in that orientation.

[F5] [[thm-heine-borel-rn]]: a closed bounded subset of finite-dimensional Euclidean space is compact.

## Proof

1.1 By T4, the open strips $\Sigma(a,b):=\{x:a\prec\prec x\prec\prec b\}$ with $a\prec\prec b$ and $a\sim_T b$ cover $\Gamma_i$. They are open: by [F2], $a\prec\prec x$ is $x\in\operatorname{int}A_a$, and $x\prec\prec b$ is $x\notin A_b$; the latter set is open because $A_b$ is relatively closed. [A1, A2, F2]

1.2 Let $\Sigma(a,b)$ and $\Sigma(c,d)$ overlap. Their intersection is open. Choose two states $e\prec\prec f$ in a small vertical segment contained in the overlap, using [F4]. Let $s_e,s_f$ be their coordinates in the first strip and $t_e,t_f$ in the second, supplied by [F1]. If $s_f<s_e$, the signed difference $R_{s_e}-R_{s_f}=(s_e-s_f)(\iota(b)-\iota(a))$ and positive scaling and signed compatibility [A1, F3] give $R_{s_f}\prec R_{s_e}$, so $f\prec e$ by the two reference equivalences; if $s_f=s_e$, those references coincide and give $f\sim e$. Both contradict $e\prec\prec f$. Hence $s_f>s_e$, and the same argument gives $t_f>t_e$. [A1, F1, F2, F3, F4, construct]

2.1 The four reference equivalences give, in signed comparison,
$f-e\sim_s(s_f-s_e)(b-a),\qquad f-e\sim_s(t_f-t_e)(d-c).$
Put $r=(s_f-s_e)/(t_f-t_e)>0$. Additivity and positive scaling in [F3] give $d-c\sim_s r(b-a)$. Applying the same algebra to the equivalences for $e$ gives $c\sim_s a+(s_e-r t_e)(b-a)$. Consequently a state in the second strip with coordinate $t$ has first-chart coordinate $s_e+r(t-t_e)$. The change of chart is affine with strictly positive slope. [F1, F3, step 1.2, algebra]

3.1 The same calculation covers a finite chain of overlapping strips: after each overlap, express the new strip's endpoint states as signed-equivalent affine maps in the existing reference pair. The local strip lemma gives every state $z$ of the added strip a coordinate $s_z\in\mathbb R$ with $\iota(z)\sim_s(1-s_z)\iota(a)+s_z\iota(b)$ in the existing chart. Signed addition, positive scaling, translation, and equivalence under negative scaling are valid by [F3]; hence induction along a finite overlap chain gives one such common chart for every state in the union. [F3, step 2.1, algebra]

4.1 Take any finite list of target states in $\Gamma_i$ and join them in order by finitely many straight segments, which lie in $\Gamma_i$ by convexity. The resulting connected path is a finite union of closed bounded segments, hence compact by [F5]. The open strips from step 1.1 cover it, so compactness gives a finite subcover. The intersection graph of those strips meeting the path is connected: otherwise their unions would partition the connected path into two disjoint nonempty relatively open sets. Order a spanning tree from one root strip; each later strip overlaps an earlier one in an open set and can be glued by step 3.1. Thus every target state has a common signed chart $\iota(z)\sim_s(1-s_z)\iota(a)+s_z\iota(b)$ with $a\prec\prec b$. [A1, F5, step 1.1, step 3.1, construct]

5.1 Let $A=\sum_j\alpha_j \iota(x_j)$ and $B=\sum_k\beta_k \iota(y_k)$ have equal total mass $M$, and let $s_j,t_k$ be their common-chart coordinates. If $M=0$, nonnegativity makes both maps empty and reflexivity compares them. Assume $M>0$ and put $L:=M/w_{\Gamma_i}$; both sums of scalar amounts are $L$, since each represented state has mass $w_{\Gamma_i}$. Each state has signed equivalence $\iota(x_j)\sim_s(1-s_j)\iota(a)+s_j\iota(b)$ in the common chart; signed addition, scaling, and splitting [F3] therefore make $A$ and $B$ each signed-equivalent to reference maps $R_{q_A}=(L-q_A)\iota(a)+q_A\iota(b)$ and $R_{q_B}=(L-q_B)\iota(a)+q_B\iota(b)$, where $q_A=\sum_j\alpha_js_j$ and $q_B=\sum_k\beta_kt_k$. If $q_A<q_B$, the signed difference has positive part $(q_B-q_A)\iota(b)$ and negative part $(q_B-q_A)\iota(a)$, so $a\prec b$ and positive scaling compare $R_{q_A}\prec R_{q_B}$ by [F3]. If $q_A=q_B$, the reference maps coincide and reflexivity applies; if $q_B<q_A$, the same argument compares in the reverse direction. Transitivity transfers that comparison to $A,B$. Hence any equal-mass pair is comparable, proving CH. [A1, F3, step 4.1, algebra] ∎
