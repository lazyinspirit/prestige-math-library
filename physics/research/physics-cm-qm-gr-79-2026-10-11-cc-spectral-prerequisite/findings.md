# Exact source40 CC prerequisite findings

Research scope only. No acceptance, receipt, readiness, model-hypothesis change
or production repair is recorded here. Read current source40 comparison and
completeness bodies and contracts, the proposed AC+CC after proof, the actual
Coulomb self-adjointness, essential-spectrum, relative-compactness,
transported-endpoint, Jost, continuum-density, onto-transform and negative
subspace suppliers, and the imported spectral/range/Riesz/measure hypotheses.
The generic spectral suppliers assume AC; Hilbert Riesz and the self-adjoint
range/resolvent suppliers assume CC; general positive C0 measure representation
assumes DC, which must not be substituted for CC.

## Current byte bindings

These are raw SHA-256 values read on 2026-10-11, not canonical content hashes.

| Item | Raw SHA-256 |
|---|---|
| thm-nrqm-coulomb-transported-radial-endpoint-realization | a73b49fa4efab59afd76d2c435005b0902d56a762b232bcf02b6c50c2e289f0e |
| thm-nrqm-coulomb-jost-volterra-solution | 7ee1a12ab386a7e3af1e69bdc517f34547754c403514d0205af64f25c9edde23 |
| thm-nrqm-coulomb-continuum-spectral-density | 516cad08648faf733e3926c55fccf0618ccbfb0804dce24faef17560882f79da |
| thm-nrqm-coulomb-onto-radial-continuum-transform | 3209b65bee5949e4528b600fc89838f44477a95f3f9c193f04cb1e23756b8c27 |

## Defects separate from the CC bookkeeping

1. Transported endpoint step 2.1: for l=0, the assertion
   |∫r w zbar|≤||rw||₂||rz||₂ is false. Taking u=v nonzero smooth supported
   in (0,1/2) gives ∫|u|²/r>2||u||². Also rw'=u'−u/r, not r²w'.
   The valid bound for **every** l, from its own step 1.1, is
   |∫u vbar/r|≤||u/r||₂||v||₂≤2||u'−u/r||₂||v||₂.
   This preserves the form boundedness/closedness claim with a changed constant.

2. Jost step 2.1: the modulus is

       |w(s)²w(y)^(-2)|=exp(−2 Im k(s−y))(s/y)^(-2 Im a),

   not the displayed exponent +2 Im a. For k in the upper half-plane,
   −2 Im a=γ Im k/|k|²≥0. It is still ≤1 for y≥γ/(2|k|²), because
   log(s/y)≤(s−y)/y. On any compact k-set away from zero, a common sufficiently
   large r0 yields the needed kernel bound; the sign error cannot be used as
   its proof. Step 4.1 also falsely rewrites the integral equation as v=1+bI
   after defining I without its inner integral. Its valid derivative is
   v'=−b w(r)^(-2)∫_r^∞w(s)²v(s)s^(-2)ds.

3. Jost clause (d)'s public O(1) remainder is false for γ>0 and (A,B)≠(0,0).
   The exact stronger sound asymptotic is proved below. The no-positive-
   eigenvalue conclusion survives because the linear term dominates the log.
   Also the complex-k derivative asymptotic should retain its exponential
   factor when estimating the error, or specify a real-k scope; this packet
   does not settle all uniform complex-k asymptotic claims.

4. Continuum-density step 1.1: G=−φ(r<)f(r>)/W, but its expansion of the
   integral gives **positive** f(r)∫_0^r φg/W + φ(r)∫_r^∞fg/W. It must have
   minus signs. With W=φf'−φ'f, the derivative jump of −φ(r<)f(r>)/W is −1,
   as required by −u''. The text incorrectly says the regular solution grows
   at most polynomially because it is entire; entire functions need not have
   that growth, and φ has an exponentially growing component off the real
   energy axis. The correct split uses φ near zero and f after the support.
   L² membership alone does not identify the resolvent: membership in the
   **actual** form/operator domain at both endpoints must be justified.
   Step 2.1's first displayed expression also inserts φ(r)φ(s) before
   Im(−f(r>)/W), although that imaginary part already equals kφ(r>)/|W|².
   The correct expression is φ(r<)Im(−f(r>)/W).

5. Onto-transform step 3.1: the polarized identity gives only
   Q M_B T g = T E(B)g, a compression. It does not by itself show
   M_B T g lies in ran(T). Supply the omitted equality of norms:

       ||M_B Tg||²=<E(B)g,g>=||T E(B)g||²=||Q M_B Tg||².

   Pythagoras then forces (I−Q)M_B Tg=0. Both the range and its orthogonal
   complement reduce all indicator multipliers; Q commutes with them. The
   subsequent countable dense-test argument then proves onto-ness. This fix
   uses CC only. Its general clause (d) includes zero-energy copies for γ=0;
   those are false and already excluded in the proposed source40 use.

## Full derivation of the real-k logarithmic correction

Fix real k>0, a=γ/(2k), b=a²+l(l+1)+ia, θ(r)=kr+a log r and
w=e^{iθ}. The actual Volterra equation on a sufficiently large half-line
has a unique bounded solution by the contraction bound of its kernel.
An integration by parts using θ'≥k bounds
w(s)²∫_r^s w(y)^(-2)dy uniformly for s≥r, so v=1+O(r^-1).
Differentiation of the **actual** double integral gives

    v'(r)=−b e^{-2iθ(r)} J(r),
    J(r)=∫_r^∞e^{2iθ(s)}v(s)s^-2 ds,
    v''+2iθ'v'−b v/r²=0.

Initially |J(r)|≤C/r, hence v'=O(r^-1). Put h=v/r² and Q=2iθ'.
Integration by parts gives

    J(r)=−e^{2iθ(r)}h(r)/Q(r)−∫_r^∞e^{2iθ(s)}(h/Q)'(s)ds.

With v bounded and v'=O(r^-1), (h/Q)'=O(r^-3), so J=O(r^-2) and
v'=O(r^-2). The ODE now gives v''=O(r^-2). A second integration by parts
on the remaining integral uses ((h/Q)'/Q)'=O(r^-4): terms containing v''
are divided by r² and all other terms decay at least as fast. Therefore

    J(r)=−e^{2iθ(r)}v(r)/(2iθ'(r)r²)+O(r^-3),
    v'(r)=b/(2ik r²)+O(r^-3),
    v(r)=1−b/(2ik r)+O(r^-2).

All endpoint terms vanish because the amplitudes decay; integrations of
O(r^-4) are O(r^-3), and integrating v' to its limit 1 gives the last line.
Thus, with c=−b/(2ik)=−a/(2k)+i(a²+l(l+1))/(2k),

    |f(r)|²=|v(r)|²=1−a/(kr)+O(r^-2).

Also ∫_R^L f(r)²dr is uniformly bounded: integrate e^{2iθ}v² by parts,
using θ'≥k, θ''=O(r^-2), bounded v and v'=O(r^-2); the differentiated
amplitude is integrable. Expanding |Af+B fbar|² gives exactly

    ∫_R^L|Af+B fbar|²dr
      = (|A|²+|B|²)[L−R−(a/k)log(L/R)]+O(1).

The fixed R can be absorbed into the O(1) term. In the present conventions
a/k=γ/(2k²). This proves the counterexample to the original O(1) claim
(take A=1,B=0,γ>0) and preserves a richer sound result. No positive
eigenfunction can be in L² unless A=B=0. It does not assert uniformity in
all complex k, nor authorize editing the supplier's original interface.

## Smallest remaining full-closure obligation

The modules in `cc-local-modules.md` remove generic nonseparable spectral
theorem, general Kato–Rellich and Weyl AC uses for these explicitly separable
spaces. They do **not** prove the multiplicity-one radial transform. The
smallest unresolved supplier is a CC-only **exact radial Green/domain and
uniform boundary-value lemma**, for the already specified endpoint realization:

- for compact g supported in [r1,r2]⊂(0,∞), the corrected Green integral
  lies in D(A_l) and equals (A_l−z)^(-1)g;
- on every compact E-interval in (0,∞), its compact-source resolvent pairing
  converges uniformly as z=E+iε approaches the interval to the Wronskian
  boundary value with density k|∫φ_l g|²/|W_l(k)|²;
- at zero the transported operator has no eigenvector (the existing scaling
  pairing route is compatible with CC after actual operator-domain transport).

This is the concrete input to the Poisson/Stieltjes spectral inversion step.
After that input, the positive-space isometry, the fixed countable dense-test
onto proof with the norm correction above, and Borel-multiplier correspondence
are CC constructions. The negative discrete-subspace closure is §3 of the
modules; computing eigenvalues, endpoint membership and n² multiplicity still
uses the regular Kummer/Laguerre exhaustion proof, whose entire upstream closure
has not been checked in this focused research. Merely replacing the generic
PVM assumption or asserting separability is insufficient to accept source40.

## Source retrieval and actual reading limits

Downloaded the complete Teschl first-edition PDF from
https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf to `teschl.pdf`;
raw SHA-256 8dc8de0b58aa0a3fedfe594a345f9b5875322e5526ea581cb640a98d55b82818,
matching the older retrieval record. Extracted full text with PyMuPDF to
`teschl.txt`. Read the complete proofs/hypotheses of Lemma 6.3, Theorem 6.4,
Lemma 6.17 and Theorem 6.19 (printed pp.134–135,145–147), and the actual
spectral-transform construction Lemma 9.13 through Theorem 9.17 area
(printed pp.195–201). No reading of the whole book or original Dollard
article is claimed. Teschl's spectral transformation discussion simplifies
to a regular or limit-circle left endpoint at printed p.198 and postpones
general singular endpoints to §9.6; that hypothesis cannot silently cover
all Coulomb l-channels. The local domain/Green proof remains necessary.
