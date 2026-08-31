---
page: myhill-nerode-theory-and-dfa-minimization
title: "Myhill--Nerode Theory and DFA Minimization"
status: draft
items:
  - def-right-language-and-equivalent-dfa-states
  - lem-state-equivalence-is-a-right-congruence
  - def-quotient-dfa-by-state-equivalence
  - lem-quotient-dfa-is-well-defined-and-equivalent
  - def-nerode-equivalence
  - lem-nerode-equivalence-is-a-right-congruence
  - lem-dfa-states-refine-nerode-classes
  - thm-myhill-nerode-characterization
  - cor-nerode-classes-give-the-canonical-minimal-dfa
  - thm-minimal-dfa-is-unique-up-to-pointed-isomorphism
  - def-distinguishing-word
  - thm-table-filling-minimization-algorithm
  - thm-pumping-lemma-for-regular-languages
  - cor-distinguishable-prefix-nonregularity-criterion
  - fs-the-pumping-lemma-characterizes-regular-languages
  - fs-pumping-quantifiers-may-be-reordered
examples: []
---

This page develops the Myhill--Nerode point of view in two parallel forms.
First it studies equivalent states inside one DFA and the quotient obtained by
merging them. It then passes to Nerode equivalence on words, proves the
Myhill--Nerode characterization of regular languages, and reads minimal DFA
structure off the resulting equivalence classes.

The closing items package two standard applications. One is algorithmic: the
table-filling procedure detects exactly the distinguishable state pairs and
therefore computes DFA minimization. The other is structural: the pumping lemma
is a necessary consequence of finite-state behavior, but it is weaker than the
full Myhill--Nerode criterion and can be misused when its quantifiers are read
in the wrong order.
