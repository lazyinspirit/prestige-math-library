---
id: ex-initial-configuration-on-empty-input
kind: example
title: "The empty-input initial configuration"
status: published
origin: pipeline
deps: [def-turing-machine-initial-and-halting-configuration-interface]
justified_by: []
landmark: false
verification:
  audited: 2026-09-09
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  scraped: []
  references:
    - title: "John E. Savage, Models of Computation, §5.1"
      url: https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation_Chapter5.pdf
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 12, §12.1"
      url: https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.12.pdf
    - title: "Michael Sipser, MIT 18.404J (2020), Lecture 5, slides 8–10"
      url: https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/18c8cd00b14d48dc5865f3bdc41abd76_MIT18_404f20_lec5.pdf
---

## Example

Let $Q=\{s,A,R\}$, $\Sigma=\{a\}$, $\Gamma=\{a,\sqcup\}$, with three distinct states and $a\ne\sqcup$. The start is $s$, the accept state $A$, and the reject state $R$. Give the transition by its two entries
$$\delta(s,a)=(A,a,\mathsf R),\qquad\delta(s,\sqcup)=(A,\sqcup,\mathsf R).$$
Here $R$ is a state name and $\mathsf R$ is the right-movement tag. For this raw tuple $M$, let $t_{\mathrm{blank}}(i)=\sqcup$ for every $i\in\mathbb N$. Then
$$I_M(\varepsilon)=(s,0,t_{\mathrm{blank}}).$$
Its support is empty and this initial configuration is nonhalting.

## Facts & Assumptions

**Given:** The finite sets, distinct states, two transition entries, and blank tape displayed above.

[F1] The raw tuple requires totality on the nonhalting state/tape-symbol pairs. The initial tape writes the length-$m$ word at indices below $m$ and blank elsewhere; configurations have a natural head coordinate and finite-support tape, and halting is determined by the two designated states ([[def-turing-machine-initial-and-halting-configuration-interface]]).

## Verification

1.1 Removing $A,R$ from $Q$ leaves exactly $\{s\}$, so the transition domain is $\{(s,a),(s,\sqcup)\}$. The two entries give one value to each pair, both in $Q\times\Gamma\times\{\mathsf L,\mathsf R\}$. All sets are finite, $\sqcup\notin\Sigma$, and the three designated states are distinct. Thus the data meet every raw-tuple requirement. [given, F1]

2.1 The empty word has length zero. For any natural $i$, the condition $i<0$ is false, so its initial-tape formula gives $t_{\varepsilon}(i)=\sqcup=t_{\mathrm{blank}}(i)$. Its support is $\{i:\sqcup\ne\sqcup\}=\varnothing$, a finite set. Hence it is a tape and $I_M(\varepsilon)=(s,0,t_{\mathrm{blank}})$ is a configuration; zero is a head coordinate even though it is not an index of an input letter. [step 1.1, F1]

3.1 Its state is $s$, unequal to $A$ and $R$. The accepting and rejecting equalities are both false, so their disjunction is false and the configuration is nonhalting. This conclusion concerns the initial triple and does not apply the transition function. [step 2.1, given, F1] ∎

## Source

This original tuple illustrates the boundary convention fixed in the local definition. Compare the blank empty-input tape in [Watrous, §12.1, p. 122](https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.12.pdf); head placement is as specified locally.
