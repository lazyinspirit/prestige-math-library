---
id: ex-em-apparatus-model-ambiguity
kind: example
title: "A discrepancy can test auxiliaries as well as field assumptions"
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: physics
dependency_level: 14
proof_strategy: direct
deps: [def-em-experiment-record-contract, thm-reals-ordered-field]
dependency_roles:
  def-em-experiment-record-contract: formulation-prerequisite
  thm-reals-ordered-field: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Elementary conditional statement about a declared affine response model inside the framework's record vocabulary: the parameter pairs $(s,b)$ and $(s+\\delta,b-G\\delta)$ produce identical predictions, so comparison through this model alone constrains only $Gs+b$ and cannot separate the pairs without additional independent information that distinguishes them. Independently fixing background or source strength is sufficient. It asserts nothing about any apparatus, no historical claim, no dataset, no sampling law and no probability; it is an exact algebraic nonidentifiability of the declared model."
sources:
  references:
    - title: "JCGM 100:2008, Evaluation of measurement data - Guide to the expression of uncertainty in measurement (GUM 1995 with minor corrections), Joint Committee for Guides in Metrology, first edition September 2008, 134 PDF pages"
      url: "https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf"
      locator: "JCGM 100:2008 clause 3.2 (printed p. 5) and clause 4.1.1 (printed pp. 8-9), read in the complete PDF: corrections, influence quantities and the functional model $Y=f(X_1,\\dots,X_N)$ of which the affine model of this example is the two-parameter case"
    - title: "Michael Faraday, Experimental Researches in Electricity, First Series (read 24 November 1831), Project Gutenberg transcription"
      url: "https://www.gutenberg.org/files/14986/14986-h/14986-h.htm"
      locator: "First Series paragraphs 1-33; an instance of a report with background, timing and detector-response auxiliaries that are not calibrated, motivating the declared affine model's ambiguity"
---

## Example

Let the record vocabulary be that of [[def-em-experiment-record-contract]], and
adopt a declared affine response model in which the model prediction for a
recorded comparison quantity is $$y(s,b):=G\,s+b,$$ where $G>0$ is a declared
response coefficient (with declared units [recorded]/[source]), $s\in\mathbb R$
a declared source-strength parameter and $b\in\mathbb R$ a declared background
parameter in the units of the recorded quantity; the model is part of the
record's analysis assumptions. Then:

(i) [Exact ambiguity] For every $\delta\in\mathbb R$,
$$y(s+\delta,\,b-G\delta)=G(s+\delta)+(b-G\delta)=Gs+b=y(s,b),$$ by the field
arithmetic of $\mathbb R$ ([[thm-reals-ordered-field]] makes $\mathbb R$ a
totally ordered field). Hence the two parameter pairs $(s,b)$ and
$(s+\delta,b-G\delta)$ produce the same predicted value at every recorded
coordinate, and every recorded value or declared closed bound interval
compatible with the prediction of one pair is compatible with the prediction
of the other.

(ii) [Nonidentifiability] When $G\ne0$ and $\delta\ne0$ the two pairs are
distinct, yet their model predictions coincide; consequently comparison through
the affine model alone constrains only the combination $Gs+b$.
For an exact recorded equality $y(s,b)=z$ it fixes that combination to $z$;
for a declared bound $|y(s,b)-z|\le r$, $r\ge0$, it only constrains it to
$[z-r,z+r]$. It cannot distinguish the pairs without additional independent
information that distinguishes them. Independently fixing $b$ or $s$ is
sufficient, though other independently declared constraints can also
distinguish the pairs.

(iii) [Explicit instance] With $G=2$, $s=3$, $b=1$ and $\delta=1$ one has
$y(3,1)=2\cdot3+1=7$ and $y(4,-1)=2\cdot4-1=7$, so the pairs $(s,b)=(3,1)$ and
$(4,-1)$ are indistinguishable by the recorded value $7$ alone; the same holds
for every declared bound interval, since the two predictions coincide exactly.

(iv) [Status] This is a deterministic algebraic nonidentifiability statement
about the declared affine response model. It asserts no property of any
apparatus, no historical value, no dataset and no statistical or probabilistic
claim; it records that a discrepancy (or an agreement) can test the auxiliary
background and calibration parameters as well as the field or source
assumptions of a model, so that attributing a recorded outcome to one premise
requires independent information resolving the ambiguity.

## Verification

**Proof technique:** direct substitution in the field $\mathbb R$ and immediate
consequences of the declared record vocabulary.

**Given:** a declared affine response model $y(s,b)=Gs+b$ with $G>0$, and the
record vocabulary of [[def-em-experiment-record-contract]]; a parameter
displacement $\delta\in\mathbb R$.

[F1] $\mathbb R$ with its order and field operations is a totally ordered
field ([[thm-reals-ordered-field]]), so distributivity, associativity,
commutativity, additive inverses and the order axioms hold in
$\mathbb R$.

[F2] The vocabulary of [[def-em-experiment-record-contract]] includes a
declared apparatus-and-preparation description (clause (c)), a calibration
model with a declared error bound when one is available (clause (e)), an
analysis-assumption list (clause (g)) and an interpretation comparing the
record with a specified model prediction (clause (h)). The affine model above
is such a declared analysis assumption. The vocabulary does not establish
the correctness or completeness of an apparatus description, calibration
correctness, a sampling law or a probability (clauses (c), (d), (e) and (i)).

1.1 For every $\delta\in\mathbb R$ the predicted value of the displaced pair $(s+\delta,\,b-G\delta)$ is $G(s+\delta)+(b-G\delta)=Gs+G\delta+b-G\delta=Gs+b$: distributivity gives $G(s+\delta)=Gs+G\delta$, associativity and commutativity of addition regroup the four terms as $Gs+(G\delta-G\delta)+b$, and $G\delta-G\delta=0$ with $Gs+0+b=Gs+b$; hence $y(s+\delta,b-G\delta)=y(s,b)$ for every common recorded coordinate, which is clause (i). [F1, given, algebra]

2.1 Any recorded value or declared closed bound interval compatible with the prediction of the pair $(s,b)$ is compatible with the prediction of $(s+\delta,b-G\delta)$: a recorded value equal to the predicted value is equal to the other predicted value by step 1.1, and a declared interval of the form $[y-r,y+r]$ with $r\ge0$ is unchanged because its centre is unchanged; the argument applies at every recorded coordinate and to every declared calibration box of clause (e), so comparison through this affine response alone does not separate the pairs. [F2, step 1.1]

2.2 If $G\ne0$ and $\delta\ne0$ then the measured coordinates of the two parameter pairs differ: the source-strength coordinates $s+\delta$ and $s$ differ because $\delta\ne0$, and the background coordinates $b-G\delta$ and $b$ differ because $G\delta\ne0$; thus $(s+\delta,b-G\delta)\ne(s,b)$ in $\mathbb R^2$ while their predictions coincide by step 1.1, which is clause (ii). [F1, step 1.1]

2.3 The explicit instance of clause (iii) is the arithmetic evaluation $y(3,1)=2\cdot3+1=7$ and $y(4,-1)=2\cdot4-1=8-1=7$ at $G=2$, $s=3$, $b=1$ and $\delta=1$, where the displaced pair is $(s+\delta,b-G\delta)=(4,1-2)=(4,-1)$. [step 1.1, algebra]

3.1 Comparison through the affine model alone constrains only $Gs+b$: an exact equality to $z$ fixes this combination to $z$, while $|Gs+b-z|\le r$ constrains it to $[z-r,z+r]$ and need not determine its value. Two pairs $(s_1,b_1)$ and $(s_2,b_2)$ have the same prediction exactly when $Gs_1+b_1=Gs_2+b_2$; taking $\delta=s_2-s_1$ then gives $b_2=b_1-G\delta$. Thus the family $\{(s+\delta,b-G\delta):\delta\in\mathbb R\}$ is exactly the set of pairs with the same prediction. Independent information is needed to distinguish its members: fixing $s$ fixes $b$ through the prediction, and fixing $b$ fixes $s$ since $G\ne0$. These are sufficient examples, not the only possible independent constraints. [F1, step 1.1, step 2.2, given, algebra]

4.1 Clause (iv) records the status of the preceding steps: the identity is a deterministic algebraic statement about the declared affine response model, registered as the record's analysis assumption by clause (g) of [F2]; no apparatus property, historical value, dataset, sampling law or probability is asserted. Agreement or discrepancy tests the conjunction of the model with its declared auxiliary parameters; independent information of the kind described in step 3.1 is needed to resolve their ambiguity before attributing an outcome to a field or source premise. [F2, step 1.1, step 2.1, step 3.1, step 2.3, given] ∎
