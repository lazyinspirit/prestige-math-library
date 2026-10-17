# Focused root finding review

Reviewed by root at 2026-10-17T02:08:45.070159+00:00

Subject: thm-parabolic-adjoint-gradient-sensitivity

Disposition: confirmed specific defect for genuine native repair

I independently confirm this specific defect after reviewing the original finding, focused source delta and its argument. Concrete finding: Proof 1.2 uses 'the adjoint equation with v=w_η and the linearized state equation with v=p', although the Statement gives equations 'for every v∈V and almost every t'. Neither this theorem nor def-parameterized-parabolic-variational-problem requires the bilinear forms to be bounded, so fixed-test equations cannot in general be substituted at time-dependent tests. Under the written fixed-test quantifier order the claim is false. A counterexample in ZFC: take T=1 and V=H=ℓ²(R), with w(t)=(1,t,t²/2!,t³/3!,...). The vectors w(t), 0≤t≤1, are linearly independent by the finite Vandermonde determinant. Extend them to a Hamel basis and let λ_t be the coefficient functional of w(t). For each fixed v, λ_t(v) is nonzero at only finitely many times. Set aθ(t;x,y)=λ_t(x)(e₀,y), independently of θ; uθ(t)=θw(t); fθ(t)=θ(w′(t)+e₀); u₀,θ=θe₀; L=0; and φ(x,θ)=(e₀,x). The state and tangent equations hold for all tests at every time. The constant p=e₀ satisfies the written adjoint equation for every fixed test almost everywhere, since λ_t(v)=0 almost everywhere, and has the required terminal value. All state, forcing, objective and parameter derivatives have the required regularity. The true reduced objective is j(θ)=θ, whereas the asserted formula gives Dj[1]=1+∫₀¹(e₀,w′+e₀)dt=2. An explicit bounded-form/operator-equation hypothesis, or appropriately strengthened simultaneous-test assumptions, is needed to license the cancellation.

This confirms this specific finding in the original carrier, not whole-item proof acceptance or native coverage. Root examined the proposed minimal changes, including preservation of rich claims and boundary cases. The research proposal remains unapplied by root. Current native initial repairs may progress independently. Native workers must review and implement the smallest sound correction, retain all approved sound content and necessary new proved property/prerequisite items, and complete genuine creation, independent review, current certification/judgments and every normal gate. Any original Statement/Definition change requires the same native reviewer to check and repair all affected direct and indirect consumers. Packet consumer dispositions supply contextual proposals, not native review credit. Admission must recheck actual baseline/current source guards; this note cannot authorize an already changed item through the unchanged-kept route.

Original findings:
[
  {
    "source_kind": "concern",
    "reader_batch": "96",
    "digest_path": "research/numerical-optimization-dynamics-2026-10-16-batch-96-step5-context.json",
    "pointer": "/concerns/0",
    "original_object": {
      "id": "thm-parabolic-adjoint-gradient-sensitivity",
      "concern": "Proof 1.2 uses 'the adjoint equation with v=w_η and the linearized state equation with v=p', although the Statement gives equations 'for every v∈V and almost every t'. Neither this theorem nor def-parameterized-parabolic-variational-problem requires the bilinear forms to be bounded, so fixed-test equations cannot in general be substituted at time-dependent tests. Under the written fixed-test quantifier order the claim is false. A counterexample in ZFC: take T=1 and V=H=ℓ²(R), with w(t)=(1,t,t²/2!,t³/3!,...). The vectors w(t), 0≤t≤1, are linearly independent by the finite Vandermonde determinant. Extend them to a Hamel basis and let λ_t be the coefficient functional of w(t). For each fixed v, λ_t(v) is nonzero at only finitely many times. Set aθ(t;x,y)=λ_t(x)(e₀,y), independently of θ; uθ(t)=θw(t); fθ(t)=θ(w′(t)+e₀); u₀,θ=θe₀; L=0; and φ(x,θ)=(e₀,x). The state and tangent equations hold for all tests at every time. The constant p=e₀ satisfies the written adjoint equation for every fixed test almost everywhere, since λ_t(v)=0 almost everywhere, and has the required terminal value. All state, forcing, objective and parameter derivatives have the required regularity. The true reduced objective is j(θ)=θ, whereas the asserted formula gives Dj[1]=1+∫₀¹(e₀,w′+e₀)dt=2. An explicit bounded-form/operator-equation hypothesis, or appropriately strengthened simultaneous-test assumptions, is needed to license the cancellation.",
      "severity": "would-be-fatal"
    },
    "reader_digest_group": "ad",
    "reader_items_read_contains_id": true,
    "original_owning_batch": "96"
  }
]

Proposal entrypoints:
[
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-owner-step4-parabolic96-common-null-cycle1/report.json",
    "pointer": "",
    "status": "focused23-indexed-entrypoint"
  }
]

Consumer proposal entrypoints:
[
  {
    "path": "research/numerical-optimization-dynamics-2026-10-16-owner-step4-parabolic96-common-null-cycle1/report.json",
    "pointer": "/same_reviewer_consumer_review"
  }
]
