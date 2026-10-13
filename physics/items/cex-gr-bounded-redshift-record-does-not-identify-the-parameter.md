---
id: cex-gr-bounded-redshift-record-does-not-identify-the-parameter
kind: counterexample
domain: physics
title: "Counterexample: a bounded one-point record of the cosmological redshift slot does not determine the emitter scale factor"
status: draft
origin: session
physical_scope: "Conceptual counterexample inside the classical gravitational framework: it shows that a declared one-point record with positive declared uncertainty for the cosmological redshift readout of the worked interface instance is consistent with two distinct parameters of the same operational model, so such a record does not determine the parameter uniquely. The numbers are declared illustrative values of the worked instance; the item asserts no measurement, no apparatus, no sampling model, no statistical inference and no empirical conclusion about any model or postulate."
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-observation-and-analysis-architecture, ex-gr-cosmological-redshift-interface-record-window, lem-gr-reciprocal-ratio-window]
dependency_roles:
  def-gr-observation-and-analysis-architecture: formulation-prerequisite
  ex-gr-cosmological-redshift-interface-record-window: formulation-prerequisite
  lem-gr-reciprocal-ratio-window: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 8 (8.61)-(8.67): the frequency ratio as the inverse scale-factor ratio and the redshift definition z = a_0/a_1 - 1, printed pp. 228-229 (PDF pp. 235-236)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, Cosmology (Cambridge Part III Mathematical Tripos, 2019 revision), section 1.1.3: radial null paths in the FRW metric and cosmological redshift from emitted and observed wave-crest intervals, equations (1.18)-(1.21), printed pp. 13-15"
      url: "https://davidtong.org/pdfs/teaching/cosmology/cosmo1.pdf"
verification:
  precheck: pass
dependency_level: 18
---

## Statement refuted

In the operational model $M_{\mathrm{op}}$ of
[[ex-gr-cosmological-redshift-interface-record-window]] clause (b), with the
declared comparison rule of clause (c) of that example and its declared
one-point record with positive declared uncertainty, the parameter is
determined uniquely: if two parameters $a_E,a_E'\in(0,a_R)$ of
$M_{\mathrm{op}}$ are consistent with the record, then $a_E=a_E'$.

## Facts & Assumptions

**Given:** The de Sitter FLRW configuration of [[ex-gr-cosmological-redshift-interface-record-window]] with the declared flat vacuum parameter $\Lambda=3H^2/c^2$, the operational model $M_{\mathrm{op}}=(S,\Theta,\theta,D,F)$ with $S=\Theta=(0,a_R)$, $\theta=\mathrm{id}$ and redshift readout $F(a_E)=a_R/a_E-1$, the declared one-point record $R$ with closed box $[1/2,3/4]$ on $z$, and the declared comparison rule that $a_E$ is consistent with $R$ exactly when $F(a_E)=z(a_E)\in[1/2,3/4]$. All of these are declared illustrative structures of the worked instance; none is a measurement.

[F1] The worked instance: its vacuum FLRW datum has $\Lambda=3H^2/c^2>0$ and satisfies the adopted field law by clause (b) and fact [A2] of [[ex-gr-cosmological-redshift-interface-record-window]]. The operational model of that example's clause (b) has parameter set $(0,a_R)$ and prediction map $F(a_E)=a_R/a_E-1=z(a_E)$; its declared record has $N=1$, $d=1$, $z_1=5/8$, $\varepsilon_1=1/8$, so that the declared closed box is $[1/2,3/4]$; its declared comparison rule makes $a_E$ consistent exactly when $F(a_E)=z(a_E)$ lies in that box; and it records the consistency set $C(R,M_{\mathrm{op}})=[4a_R/7,2a_R/3]$ in clauses (b)-(c).

[L1] Reciprocal ratio windows: for $a_*>0$ and $0<u_1\le u_2$ the preimage under $a\mapsto a_*/a$ of $[u_1,u_2]$ is $[a_*/u_2,a_*/u_1]$, and that map is strictly decreasing and injective ([[lem-gr-reciprocal-ratio-window]] claims 2-4).

## Counterexample

**Proof technique:** direct.

1.1 (Two consistent parameters.) Let $a_1:=4a_R/7$ and $a_2:=2a_R/3$, both defined since $a_R>0$. They lie in the parameter set $(0,a_R)$ because $0<4/7<2/3<1$. Their predictions are $F(a_1)=a_R/(4a_R/7)-1=7/4-1=3/4$ and $F(a_2)=a_R/(2a_R/3)-1=3/2-1=1/2$ by field arithmetic; both values lie in the declared closed box $[1/2,3/4]$. Hence $a_1$ and $a_2$ are both consistent with the record under the declared comparison rule. [F1, L1, algebra]

1.2 (Distinctness.) The two parameters differ: $a_2-a_1=a_R(2/3-4/7)=a_R(14-12)/21=2a_R/21>0$, so $a_1\ne a_2$. In fact no uniqueness holds even after fixing the box: by [L1] with $a_*=a_R$, $u_1=3/2$ and $u_2=7/4$, the consistency set is the whole closed interval $[4a_R/7,2a_R/3]$, in agreement with the consistency set recorded in [F1], and every one of its elements is consistent with the record. [F1, L1, algebra]

2.1 (Conclusion.) The record $R$ is a one-point data record of the interface vocabulary with positive declared uncertainty $\varepsilon_1=1/8>0$, and steps 1.1 and 1.2 exhibit two distinct parameters of the same operational model that are both consistent with it; the uniqueness assertion of the Statement refuted is therefore false. This is an exact algebraic consistency computation on declared illustrative values: it asserts no measurement, no calibration, no probability model, no statistical inference and no empirical conclusion about the model or about any postulate. [F1, L1, step 1.1, step 1.2] ∎

## Remarks

- **Positive uncertainty is what fails to pin the parameter.** With $\varepsilon_1=0$ the box would be the singleton $\{5/8\}$, whose preimage under the strictly monotone prediction map is the single parameter $8a_R/13$; the failure of uniqueness in the counterexample is a property of the closed box of positive width together with the comparison rule, not of the prediction map's invertibility.

- **Scope.** The two witnesses are illustrative parameters of a hypothetical configuration; identifying any of them with a physical source would require the apparatus, calibration and analysis layer that the research queue records as unsupplied.
