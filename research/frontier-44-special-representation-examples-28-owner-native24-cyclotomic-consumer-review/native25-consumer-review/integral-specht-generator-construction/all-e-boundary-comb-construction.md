# All-e boundary comb construction

Use KMR arrows i→i−1 and crossings k. This construction expands the two-brick source diagram recurrence as a family of explicit words. The exact current native24 gauge is in the corrected presentation note. The adjacent three-brick identity is not established by this note.

Write [a,b]=k_a k_(a−1)...k_b for a>=b, and1 for an empty descending interval. For e>=3 define, for1<=r<=e−1,

    H_r = [e−1,r+1] ( product_(a=1)^(r−1) [e+a,r+a+1] )
          ( product_(a=r)^(e−1) [e+a,a+1] ),

where the products are in increasing a order. Its crossing count is e²−r²−1. In particular H_1 is exactly the previously defined contraction C_e^−, and

    H_(e−1)=k_(e+1)...k_(2e−2) k_(2e−1) k_(2e−2)...k_e.

The local initial word is j=(0,...,e−1)^2. Assume every y_s kills v and every k_t with t not divisible by e kills v.

## Interior comb recurrence and its required diagram sweep

For1<=r<=e−2, straighten the comb H_r by moving the right copy of residue r−1 across the pending crossing of the two residue-r strands, then slide that strand to the bottom-right internal crossing k_(e+r). The displayed descending intervals specify the comb entirely; the first r top strings already have no crossings. The sweep replaces a local braid of colours(r,r−1,r). Because r→r−1 in KMR, this local braid has correction+1. Every other local braid encountered in sliding has three colours(s,r−1,r) with s≠r, so its correction is zero: equality of the first and third colours is the necessary condition for any KLR braid correction. Distant strands commute.

The main summand after this braid slide has bottom-right factor k_(e+r), which kills v. Its surviving correction diagram has r−1 two-crossing digons between colour r and colours0,...,r−2. These colours are disconnected: their differences range from2 to r<=e−2. Thus every such digon is exactly k_t² e(i)=e(i), with no dot term or scalar. Removing these r−1 digons leaves precisely the word H_(r+1): its initial descending interval ends one index earlier, each prior short interval loses its final letter, the former first full interval becomes the last short interval, and the untouched remaining full intervals stay in their displayed order. Hence this explicit comb sweep gives H_r v=H_(r+1)v.

The sweep's crossing counts provide a useful consistency check, not a proof substitute: removal of the one corrected braid and the r−1 disconnected digons reduces length by3+2(r−1)=2r+1, exactly the difference between e²−r²−1 and e²−(r+1)²−1. Its colour analysis shows that there are no unrecorded single-edge or double-edge correction terms. This is the general recurrence used in the actual two-brick diagrams, rather than a dimension or R-matrix argument.

For example e=4:

    H_1 = k3 k2 k5 k4 k3 k2 k6 k5 k4 k3 k7 k6 k5 k4,
    H_2 = k3 k5 k4 k6 k5 k4 k3 k7 k6 k5 k4,
    H_3 = k5 k6 k7 k6 k5 k4.

In H_1 the unique surviving braid correction has colours(1,0,1), and the main term ends in k5. In H_2 it has colours(2,1,2); the correction word, after distant commutations, is k5 k6 k3² k7 k6 k5 k4. Its squared crossing has colours2,0, giving1 and leaving H_3; the main term ends in k6. These are illustrations of the general word sweep, not finite-e evidence for its universality.

## Final rung: explicit word reduction

Put P=k_(e+1)...k_(2e−3) and Q=k_(2e−3)...k_e. Then

    H_(e−1)=P(k_(2e−2)k_(2e−1)k_(2e−2))Q.

On Qv the indicated triple has colours(e−1,e−2,e−1); its KMR braid correction is+1. Thus

    H_(e−1)v=P k_(2e−1)k_(2e−2)k_(2e−1) Qv+P Qv.

The first summand is zero, since its rightmost k_(2e−1) commutes past every letter in Q, whose indices are<=2e−3, and then kills v. In PQ the innermost pair k_(2e−3)² and then every successive nested pair crosses colours e−1 and one of1,...,e−3. Each such pair is disconnected; its quadratic is1. All nested pairs therefore disappear, leaving k_e v. This includes e=3 with P empty and Q=k3. Consequently H_(e−1)v=k_e v. Together with the interior recurrence this proves C_e^−v=k_e v.

## Opposite contraction by an explicit reflection

The assignment

    e(i_1,...,i_(2e)) -> e(e−1−i_(2e),...,e−1−i_1),
    y_s -> −y_(2e+1−s),     k_s -> k_(2e−s)

is an integer involution of this KMR algebra. Equal-colour dot constants are preserved because strand-position reversal interchanges the two mixed relations and dot negation cancels the resulting sign. Single-edge orientation and dot differences both reverse; disconnected and double-edge quadratics are unchanged. In a three-strand braid the order reverses and the single-edge orientation also reverses; double-edge correction is unchanged by the simultaneous dot negation and order reversal. This verifies the defining relations. The involution fixes j and its generator-annihilator ideal, and fixes W_e by distant commuting moves, because W_e is fully commutative. Its two boundary dot paths are exchanged. Hence it carries C_e^− to C_e^+ up to distant commuting moves and carries k_e to k_e. Applying the same word argument in the quotient gives C_e^+v=k_e v.

Dot slides previously gave k_eW_ev=−C_e^−v−C_e^+v; therefore k_eW_ev=−2k_ev for every e>=3. The separately explicit e=2 calculation establishes the same identity there. Multiplying by the complementary prefix of W_e yields sigma²v=−2sigma v. In BK/native notation, where sigma_KMR=epsilon sigma_BK with epsilon=(-1)^e for e>2 and epsilon=1 for e=2, these are k_BK,e sigma_BK v=−2epsilon k_BK,e v and sigma_BK²v=−2epsilon sigma_BK v.

## Construction-integrity note

The final-rung, reflection, dot slides, and exact H_r words above are fully explicit. The interior recurrence is supplied as a general strand-sweep proof with all surviving/error colours and endpoint factors recorded, matching the inspected source recurrence. An independent reviewer should check that this stated sweep indeed carries each displayed H_r correction word to H_(r+1); if that word-shape identification is judged insufficiently explicit, the precise residual obligation is H_r v=H_(r+1)v for1<=r<=e−2. No acceptance is represented here. The adjacent corrected three-brick identity remains a separate unresolved obligation.
