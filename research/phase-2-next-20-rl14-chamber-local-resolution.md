# RL14 chamber gap: complete local resolution

No new pair. The full zero-wall generated stabilizer assertion is proved,
not weakened to a boundary warning. The finite DG root-system page is no
longer an actual prerequisite of RL14; other original pair requirements remain.

Root read complete published simple-reflection/dual-action definition, root-lattice
definition, root-space/sign proposition, Weyl automorphism proof and category-O
definition; inspected the existing ready weight-space Weyl-isomorphism strategy
and integral-weight definition. Earlier GCM realization/root construction reading
is in the affine-level receipt. Source: Kleshchev complete Lemmas3.3.1–3.3.3
and relevant Proposition3.4.1(i)–(iii) proof from the already retrieved full PDF.
The transpose GCM instantiation supplies real-coroot signs and the same word
length. No finite-type chamber theorem or abstract Coxeter presentation is used.

These are complete scaffold arguments; independent Step3 judgment remains.
No authored published item is changed and no new source-fetch stamp is invented.

## def-kac-moody-real-coroot-inversions

For a finite GCM realization let real coroots be W{h_i}. Positive real coroots have nonnegative integral coordinates in the independent h_i; negative means the opposite. Let length(w) be the least length of a simple-reflection word. Set Inv(w)={beta positive real coroot: w beta is negative} and N(lambda)={beta positive real coroot: lambda(beta)<0} for integral lambda. The following lemma proves the asserted signs and finiteness of Inv(w).

Transpose A and exchange the independent root/coroot families: (h*, {h_i}, {alpha_i}) realizes A transpose. Its Weyl action on h is the dual of the original action, with the same word relations and minimal lengths. Apply the published general GCM root results to this realization. The coroot span has unique integral coordinates. Pairings of integral lambda with it are real integers; complementary complex Cartan values play no role.

## lem-kac-moody-reduced-words-and-coroot-signs

Each real root and coroot has one sign; a simple reflection permutes the positive real roots other than its own simple root, and likewise for coroots. If w(alpha_i)<0, any word for w admits deletion of one factor in a word for w s_i. Hence length(w s_i)<length(w) iff w(alpha_i)<0, with the corresponding dual-coroot assertion. Every Inv(w) is finite, of cardinality at most length(w).

The published root-space proposition gives one-sign roots, only plus/minus alpha_i on its simple line, and positivity preservation off alpha_i; the published Weyl automorphisms give invariance. For a word w=s_i1...s_it with w alpha_i negative, track suffix images of alpha_i from right to left. At the first positive-to-negative step the positive root must be alpha_is. Put v=s_i(s+1)...s_it, so v alpha_i=alpha_is. Lift v by the published Lie automorphisms. They map the bracket line [g_alpha_i,g_-alpha_i]=C h_i onto C h_is; preservation of the pairing value2 fixes the scalar, so v h_i=h_is. Therefore v s_i v^-1=s_is on the full realization, and w s_i is the original word with s_is deleted. Apply this to a minimal word. If w alpha_i is positive, (w s_i)alpha_i is negative and deletion in the reverse direction proves the strict opposite length inequality. Repeat the entire argument for the transpose realization, whose dual Weyl group has the same length. Each simple coroot reflection changes the sign of only h_i, so composing one reflection changes inversion cardinality by at most1; induction on a word proves finiteness and the bound. No Coxeter presentation or finite Weyl group is assumed.

## lem-kac-moody-chamber-boundary-stabilizers

An integral Weyl orbit meeting Pplus has a unique dominant representative eta. Its stabilizer is generated exactly by the simple reflections s_i with eta(h_i)=0. Starting at any weight in this orbit, repeated reflections at any negative simple label terminate at eta; choose the least such index for a deterministic algorithm. No claim is made that every integral orbit meets Pplus.

If lambda=w eta with eta dominant, any positive coroot beta with lambda(beta)<0 must have w^-1 beta negative, so N(lambda) is contained in finite Inv(w^-1). When lambda(h_i)<0, s_i permutes the other positive real coroots and reverses h_i, so |N(s_i lambda)|=|N(lambda)|-1. If no simple label is negative, every positive coroot pairs nonnegatively, hence N is empty. This proves termination. For uniqueness and stabilizers, suppose eta,zeta=w eta are dominant and w=s_i1...s_it is reduced with t>0. The dual length lemma makes w h_it negative. Thus 0<=eta(h_it)=zeta(w h_it)<=0, so s_it fixes eta. Delete that last factor and induct. All deleted factors have zero eta-label, and the endpoint is eta. Conversely each zero-label reflection fixes eta directly. This proves the full parabolic stabilizer formula, not just nonuniqueness of transporting words.

## prop-every-integrable-weight-is-weyl-conjugate-toward-the-dominant-chamber

For an integral weight of an integrable module whose Weyl orbit meets Pplus, successive reflections at negative simple labels terminate at its unique dominant representative eta. Stab_W(eta) is generated by the zero-label simple reflections; transporting elements need not be unique. Every weight orbit of an integrable highest-weight module, and more generally an integrable category-O module, meets Pplus.

Apply the local chamber lemma for the conditional orbit and full wall-stabilizer claims. For the highest-weight/category-O case, the existing Weyl weight-space isomorphisms preserve support. Reflecting at an integral negative simple label increases the weight by a positive integer multiple of that simple root. The category-O definition gives only finitely many support weights above the starting weight, so this process terminates at a weight with all labels nonnegative. The original conditional and highest-weight claims and the full stabilizer formula are retained. No finite DG root-system page is used.

