---
page: gap-amplification-and-assignment-testing-examples
title: "Gap Amplification and Assignment Testing: Examples and Counterexamples"
status: published
requires: [gap-amplification-and-assignment-testing]
items: []
examples: [ex-degree-reduction-preserves-unsatisfaction, cex-repeating-constraints-amplifies-the-gap, ex-plurality-decoding-of-powered-local-views]
---

The examples and counterexample keep the two constructions at sizes that can
be checked by hand. The cloud rounding example feeds a labeling with $S=10$
disagreeing ports, $U_{\rm int}=4$ internal violations and $U_{\rm ext}=2$
external violations into the degree-reduction decoding bounds and reads off
$U_{\rm int}\ge7/2$ and $U_G\le12$, together with the constant rescaling that
relates the counts to the $387$-regular registered graph. The local-view
example fixes a $4$-regular graph and $t=1$, so that the eight length-$1$ walk
slots from a vertex carry the claims $a,a,a,a,a,b,b,c$, and computes the
plurality decoding $a$ of frequency $5/8$, illustrating that patterns are
counted with multiplicity and that the fixed tie-breaking order is not
invoked.

The tester-size iteration example is deferred with the constant-loss
composition interface needed to justify its doubling premise. The counterexample shows that the naive
amplification by repetition fails: the two-loop system with one always-true
and one always-false constraint has unsatisfaction fraction $1/2$, and listing
each constraint $r$ times leaves the fraction at exactly $1/2$, so a genuine
gap-amplification step has to change the variables and constraints rather than
reweight the existing list.
