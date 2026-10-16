# Private focused model analysis: no uniform worst-case VTAA bound without probability information

This note is a complete conditional obstruction to the **uniform black-box, worst-case running-time** reading of the current `thm-qa-27-vtaa-amplification` Statement. It does not disprove Ambainis' theorem under its intended complexity conventions, does not settle the constructive expected-time bound, and does not supply a source reading. No external text was downloaded or claimed read for this argument. No canonical content, native process, tests, gates, hashes, readiness, or review stamps were changed.

## Precise scope

A uniform black-box algorithm has the same classical input for the oracle family below, apart from fixed dimension, declared success projection, times and access types. It can call the supplied oracle, inverse and controlled versions. All its other gates and classical instructions are independent of the unknown oracle parameters. It has finite-outcome measurements, finite branching per discrete operation, and counts all its actual quantum and classical construction operations in the running time. Its claimed time bound is a bound on every measurement/random branch of positive probability for each promised oracle input, with a uniform constant across the oracle family. Its success event is an observable output flag/projector, and conditional on this event its output is the prescribed conditional good state.

These are the hypotheses at issue. If the input exposes the matrix entries, a classical circuit description from which hidden parameters can be read, exact branch probabilities, or a represented positive probability floor, this oracle argument does not apply. Nor does it apply to expected-time or high-probability running-time bounds. The current variable-time definition's phrase that branch probabilities remain “explicit resource inputs” should therefore be clarified by the owner: if it means free exact probability advice, the uniform black-box reading has already been changed.

## Three-dimensional one-stage instance

Fix the Hilbert space with orthonormal basis |0>,|1>,|2>, initial state |0>, and fixed good projector Pi=|1><1|+|2><2|. For b in {1,2} and 0<theta<pi/2, let A_(theta,b) rotate the plane spanned by |0>,|b>:

    A_(theta,b)|0> = cos(theta)|0> + sin(theta)|b>,
    A_(theta,b)|b> = -sin(theta)|0> + cos(theta)|b>,

and act identically on the remaining basis vector. Its inverse is the opposite-angle rotation and its controlled form is diag(I,A_(theta,b)). Supply these actions with the same declared unit costs for every theta,b. All reflections in the initial and good projectors are fixed and available. One stage applies A and stops every branch, labeling Pi good and its complement bad. Thus m=1, Tmax=Tav=1, p_succ=sin^2(theta)>0, and the conditional good state is exactly |b>. This is a finite coherent variable-time instance. The extension at theta=0 has A_(0,b)=I for both b, including inverse and controlled actions; it need not satisfy the positive-success promise.

The displayed original VTAA expression reduces, up to fixed positive logarithmic constants, to O(1+1/sin(theta)). A uniform worst-case reading therefore supplies a single integer K bounding every operation of the amplification protocol on every b and every theta in [pi/6,pi/3], because sin(theta)>=1/2 there. Any fixed overall padding of the one-stage cost gives the same argument if an asymptotic convention requires a fixed larger Tmax.

## Finite-prefix polynomial lemma

For any fixed number K of operations of such an oracle protocol, the probability f_b(theta) of still running after K operations is a real trigonometric polynomial in theta.

To prove this, expand the finite decision tree through K steps. Each node has finitely many children and there are finitely many nodes. On each branch retain its unnormalized state: multiply the initial vector/density matrix by the fixed gates, oracle calls, and projectors or fixed Kraus operators along the branch without dividing by measurement probabilities. Oracle and inverse entries are among constants, sin(theta), cos(theta) and their negatives; controlled entries add fixed identity blocks. Hence each branch's unnormalized amplitudes are finite polynomials in sin(theta),cos(theta), and its probability is a sum of squared moduli of those amplitudes. For a mixed initial state the same conclusion follows by linearity, or by a fixed finite purification. Classical coin probabilities contribute constants. Summing the finitely many continuing branch probabilities gives the claim. Projective measurement normalization introduces no denominators because the unnormalized branch convention already includes its probability.

A trigonometric polynomial vanishing throughout a real interval is identically zero: express it as sum_(j=-D)^D c_j exp(ij theta), multiply by exp(iD theta), and view it as an ordinary polynomial in z=exp(i theta). A nonzero polynomial of finite degree cannot vanish at infinitely many distinct points of the circle. This proof also works if a promise restricts theta to a dense represented subset of the interval while the protocol is otherwise the same black-box protocol.

## The fixed-time contradiction

For each b, the asserted worst-case bound K implies f_b(theta)=0 for theta in [pi/6,pi/3]. By the lemma f_b is identically zero, for every real theta, including theta=0. Consequently the same algorithm halts within K operations with probability one for every theta and both b; any formally continuing branches have identically zero probability. The probability-one qualification is enough for all output-state assertions, and covers the usual convention ignoring zero-probability transcripts.

Let Sigma_b(theta) be the unnormalized density matrix on the declared output register on the successful output event, obtained by the first K operations. Halted branches can be padded by identity operations, preserving their classical output records. The same finite-prefix calculation shows every matrix entry of Sigma_b(theta) is a trigonometric polynomial, so Sigma_b is continuous at theta=0.

For every theta>0, the claimed exact conditional-good output and success probability at least 1/2 imply

    Sigma_b(theta) = s_b(theta) |b><b|,  s_b(theta)=Tr Sigma_b(theta)>=1/2.

Taking theta down to zero gives Sigma_b(0)=s_b(0)|b><b| with trace at least 1/2. But the entire oracle interface at theta=0 is identical for b=1 and b=2, and the classical inputs and nonoracle instructions are identical. Thus Sigma_1(0)=Sigma_2(0). A matrix simultaneously supported on the orthogonal one-dimensional subspaces span{|1>} and span{|2>} must be zero, contradicting its trace at least 1/2. This is a finite-dimensional oracle contradiction; it does not depend on an informal “one cannot know p” intuition or on an assumption that the p=0 input must itself be solved.

## Consequence and exact remaining obligation

Under the precise uniform black-box and worst-case convention above, the current original Statement cannot be proved: even its one-stage specialization is false. An intended theorem must transparently change at least one interface:

* State expected running time, allowing arbitrarily long but sufficiently unlikely construction/production branches, and prove that expectation with every estimation cost included; or
* State an explicit positive probability floor/advice or a query budget input, give the resulting charged finite cap, and prove the advertised probability/time dependence under that additional input; or
* State a probability-qualified running-time bound and explicitly quantify its failure parameter; or
* Make the nonuniform, exact-probability/circuit-choice advice explicit and charge or assume it appropriately.

This analysis selects none of those corrections on the owner's behalf. In particular it does NOT justify silently reading the original fixed-time expression as an expectation, and it does NOT prove that the desired original logarithmic powers survive a constructive unknown-p implementation. The source-specific staged-estimation accounting remains an authoring obligation if the owner chooses an expected-time version. The already-proved separately capped CKS branch and generic RelProb supplier do not prove that missing stronger theorem.

No new source reading is asserted; the argument above is local finite-dimensional model analysis. Candidate integration should disclose whether the original Statement was intended as a worst-case uniform oracle claim or used a different convention.
