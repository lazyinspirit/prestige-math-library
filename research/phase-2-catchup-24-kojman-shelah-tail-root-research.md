# Kojman–Shelah tail closure: applied operator repair

Root, 2026-09-09 16:25 UTC. Applied after group g released batches 14–16.
The live batch and canonical plan contain the corrected closure contract,
closedness refinement and actual scale-tail dependency routes. Owner scope
approval and repaired-item receipts were recorded for tail closure and
closedness. Cofinality and its three consumers received bounded reviews of
the changed dependencies, not independent rejudgments of unchanged content.
No published item was changed by this scaffold repair.

Read the full current target, normalized-scale and tail-supremum contracts,
Rudin-space definition, closedness/cofinality/example consumers, and original
Kojman–Shelah paper Claims 3–4, Definition 5, Claims 8–14 with their proofs:
https://arxiv.org/pdf/math/9512202 (printed pages 4–8). The source requires
0<m<=k and strict coordinatewise increase on the tail. Those hypotheses are
missing or ambiguous in the current target. The local tail-supremum supplier
already has the correct hypotheses. No new result or pair is necessary.

## Corrected contract and complete interface argument

Assume AC. Let 1<=m<=k<omega, let kappa=aleph_m, and let
(h_xi)_(xi<kappa) be points of X such that h_xi(n)<h_eta(n) whenever
xi<eta<kappa and n is in B with n>k. Put g(n)=sup_xi h_xi(n) on B.
There exists h in X agreeing with g at every coordinate n>k, hence h=*g.

Each h_xi has a unique normalized-scale index alpha_xi: two different scale
indices are strictly eventually ordered, so their representatives cannot be
eventually equal on infinite B. The tail strictness gives h_xi<*h_eta and
therefore alpha_xi<alpha_eta. With lambda=aleph_(omega+1), regularity and
kappa<lambda give delta=sup_xi alpha_xi<lambda. Also cf(delta)=kappa:
the sequence is cofinal, and a smaller cofinal family in delta would, by
regularity of kappa, have all its elements below one alpha_xi, a contradiction.

For n>k, every h_xi(n)<aleph_n: otherwise its successor term could not be
strictly greater while remaining <=aleph_n. Thus the restrictions are in
the tail product, not merely its ordinal compactification. Since
kappa<aleph_n and aleph_n is regular, g(n)<aleph_n. Strictness and regularity
give cf(g(n))=kappa by the same cofinal-index argument as for delta.

Apply the existing tail-supremum lemma to these restrictions and their
strictly increasing alpha indices. It gives g=*f_delta on the tail.
For clarity, its least-upper-bound argument needs uncountable kappa:
if a competing eventual upper bound u is below g at infinitely many
coordinates, take at each such coordinate the least xi with h_xi(n)>u(n).
The countably many indices have a common bound below kappa. That single
term contradicts u's eventual upper-bound property. Normalization then
identifies this least upper bound with f_delta modulo finite.

Define h(n)=aleph_n for n<=k in B and h(n)=g(n) for n>k.
Every coordinate has uncountable cofinality, strictly below aleph_(k+1):
the finite prefix has cofinalities aleph_n with n<=k; the tail has aleph_m.
Hence h is in X_R(B). Since h=*f_delta it is in X, and h agrees with g on
the whole tail. AC is used for the stated regularity/cardinal framework;
no Recorded item, unproved scale existence or empty equivalence class is
assumed. Scale existence remains the earlier planned local supplier.

Declared interfaces after repair should include the existing definition and
tail lemma, plus def-axiom-of-choice, thm-regularity-of-the-alephs and
thm-cofinality-basics for the explicit cardinal/supremum steps. Root has now
read both complete published proofs and the complete AC definition. Successor
regularity explicitly selects injections under AC; the cofinality lower bound
applies to these ordinal subsets. These exact interfaces suffice. No new
published defect was found in this bounded use; no whole-closure audit claimed.

## Consumer reconciliation

- Closedness: choose the least m with infinitely many coordinates of
  cofinality aleph_m. Since X_R permits only uncountable cofinalities,
  m>=1. The finite union of all smaller strata is finite. Choose k>=m
  above that union and the finite equality pattern. At stage xi<aleph_m,
  fewer than aleph_m previous values have supremum below t(n) on the
  tail; the fixed near-t equality pattern provides a new point strictly
  above that bound. This supplies the corrected strictness hypothesis.
  The resulting tail supremum is <=t. Replace its finitely many prefix
  coordinates by t's values to obtain h<=t in X. Equality on infinitely
  many least-stratum coordinates then gives cofinite equality by the
  earlier trichotomy argument. No lost closedness conclusion.
- Cofinality/size: the live strategy constructs product representatives
  directly, not necessarily points of X. It correctly uses the earlier
  scale-tail lemma at m=k=1, rather than circularly applying X-closure.
  Its declared X-closure edge is unnecessary for that proof; reconcile
  with the released worker's final dependency list before removing it.
- Tail example: the live strategy also uses the earlier scale-tail lemma
  at m=k=1 directly, with strict increase. Preserve that route and its
  cofinality supplier; no use of the former unrestricted statement.

Exact target-ID search in items/ and library/ found no current textual
consumer. This is not an exhaustive implicit-use audit. The published
recorded target rem-dowker-spaces retains its existing Phase-3 replacement
debt; this unpublished supplier cannot close it. No classification change.

The three final consumer receipts were reconciled at 16:24–16:25 UTC:
weight/character f7729fdb04b95e321fda033e169dddc67b9875e07f72b062168486547c905b10;
Dowker conclusion fc2a90e8288078bbdac0fb9c48a0237c8d8d15adaeff79ba7987336621f207b0;
tail example 80794493e9f2a2b31e8512d110c884917796d6bfec3450261c8de835d044d2e0.
Claim 8 remains the source coverage target; no source claim was dropped.
The whole Step-3 gate is not complete: interpretation and spectral-convention
escalations are separate unresolved work. Published replacement debt remains
open until actual publication and its separately authorized proof repair.
