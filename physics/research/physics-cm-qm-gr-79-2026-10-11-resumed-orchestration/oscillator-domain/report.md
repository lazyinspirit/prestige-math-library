# Driven oscillator domain: research integration handoff

Exact subject: `thm-nrqm-controlled-dynamics-driven-oscillator-common-domain`.
Sole consumer reviewer and integrator: `/root/spectral_lead`. No production,
import, manifest, contract, readiness, plan, native hold/control, code or gate
was written. Existing cycle1/cycle2 histories and caps are unchanged.

The earlier `cc-spectral-prerequisite/second-oscillator-domain-draft.md` already
supplied the correct full replacement. I checked its proof against the current
exact supplier clauses and reused it. The adjacent item-named candidate retains
that proof with only these additions: public coefficient definition of
`N_psi^{1/2}`, explicit first-variable-linear inner product and negative-sign
2pi Fourier convention, explicit Fourier-unitary adjoint-domain transport, and
an exact CC complex-L2 completeness premise for the graph-Hilbert assertion.
The perturbation constant is renamed beta to avoid colliding with the right
time endpoint b; research-only commentary is kept here rather than in the
integration text.

The only numerical public correction is
`||Q psi|| <= ell sqrt(2||Nhalf psi||^2+||psi||^2)` and its `hbar/ell`
momentum counterpart. Both follow from the two exact ladder norms and
`(x+y)^2 <= 2(x^2+y^2)`. The earlier finite witness remains valid:
`psi_plus=(psi0+psi2)/sqrt2` has `||psi_plus||^2=||Nhalf psi_plus||^2=1`
and `||Q psi_plus||^2/ell^2=3/2+1/sqrt2 > 2`; the minus combination gives
the momentum counterexample. No domain or conclusion is narrowed.

The proof retains all of `D(Nhalf)`, `Y=D(N)`, the infinitesimal bound and
norm-C1 family. It produces the explicit valid constant
`b_eta=ell+ell^2/(2 eta hbar omega)`. Its actual diagonal inverse is
`R_z=(A-z)^(-1)` (opposite sign to the library's conventional `(z-A)^(-1)`),
with coefficients `1/(hbar omega(n+1/2)-z)`, for both `z=+iR,-iR`.
The factorization is `H(t)-z=(I+B_t R_z)(A-z)`, and the inverse order is
`R_z (I+B_t R_z)^(-1)`. Both inverses map into the original Y. In the
first-variable-linear adjoint convention, `ker(H(t)^*-iR)` is orthogonal to
`ran(H(t)+iR)`, which proves the exact adjoint-domain equality. All signs,
factors and inverse orders were checked directly. Multiplier truncations and
finite Hermite partial sums establish the complete half-number-domain
couplings; coherent states alone would not establish that domain claim.

The current imported `thm-kato-rellich` explicitly assumes AC, while the
coherent-evolution carrier invokes the AC composite-operator supplier. The
candidate removes both load-bearing dependencies and reconstructs the actual
maximal Q/P operators locally. Retained supplier assumptions were checked
against their actual Statements; all imported dependencies in this candidate
match their recorded `research/math-imports.json` raw hashes. No new spectral
primitive is required for this subject. The nonautonomous supplier is invoked
only to name the regularity hypotheses, whose complete prerequisites (dense
Hilbert graph Y, continuous embedding, common self-adjoint domains and norm-C1
regularity) are proved here. Its other consumers and its proof are outside this
subtask. Spectral lead must reconcile level/manifests/mirrors and perform all
old/current/alias direct and indirect consumer checks before integration.

`evidence.json` records exact raw, guard, judge and interface hashes for the
candidate, current production carrier, inherited draft/scope request, removed
supplier contexts and all retained direct suppliers. The integration candidate's
raw SHA256 is `74e7c33dc24cc79771561cbb235ad768f5e272ca83b49ff20f7b36c3e3e75ca3`;
its guard hash is `a0fec043f1b489fcf874e5dedd081ce51e9558bfafb7cfd9bb63342e3cbf8ae5`.
The current production raw SHA256 is
`f64add15a0584dcaef631e106c2069e676c2534fbf62c803f759cb646efa77ea`.
Hash function conventions are explicit in the JSON and must not be substituted
for one another.

Scoped precheck passed; proof-layout found eight steps and zero defects;
rendercheck checked one candidate with zero errors or warnings. These are local
mechanical checks, not independent audit, source-reading evidence or native
acceptance. No external authoritative full text was freshly retrieved; inherited
citations remain inherited provenance. One exploratory bare-node precheck help
invocation failed (unknown `.mts` extension) before the correct tsx-run command
passed; the evidence-generation command had a harmless output-only ReferenceError
after writing its complete JSON, which was subsequently read successfully.
