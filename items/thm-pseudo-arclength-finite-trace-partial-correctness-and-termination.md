---
id: thm-pseudo-arclength-finite-trace-partial-correctness-and-termination
kind: theorem
title: Certified pseudo-arclength traces are locally sound and conditionally terminate
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - lem-finite-budget-newton-work-and-status
  - alg-pseudo-arclength-continuation-with-certified-local-corrector
  - lem-transverse-hyperplane-selects-unique-local-branch-point
  - lem-regular-curve-chart-and-pseudo-arclength-predictor-defect
  - thm-augmented-residual-contraction-certificate
  - thm-simple-fold-lyapunov-schmidt-parameterization
  - alg-finite-budget-newton-for-vector-residuals
  - thm-mean-value-inequality-for-total-derivatives
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Eugene L. Allgower and Kurt Georg, Numerical Continuation Methods (1990)
      url: http://lib.ysu.am/disciplines_bk/080dea8526183abcce1135f2a4460625.pdf
      locator: "Chapters2–3, regular-curve predictor/corrector setting. The bounded-callback finite-status composition and error-aware predictor bound are proved locally using the named typed suppliers; no verbatim external theorem or new source reading is asserted."
dependency_level: 5
---

## Statement

For admitted inputs of [[alg-pseudo-arclength-continuation-with-certified-local-corrector]], assume its supplied certificate bounds are sound. Every returned ball, including the seed, contains exactly one zero of its recorded augmented section. Each appended ball identifies the unique forward section point on the supplied local chart of the previously certified branch point. Its center error obeys the bound of [[thm-augmented-residual-contraction-certificate]]. A `finite-trace` return has exactly $N_{\rm req}$ appended balls; every other return retains a certified prefix and never asserts that the failed candidate is a root. A fold field `certified` implies precisely the supplied local simple-fold chart and curvature conclusion, with all hypotheses of [[thm-simple-fold-lyapunov-schmidt-parameterization]].

If every invoked tangent, evaluator, chart, certificate and requested fold callback returns a result or declared failure in finite time, the procedure terminates. There are at most $N_s$ continuation attempts, at most $N_c$ Newton updates per attempt, and at most $N_c+1$ certificate attempts in a bounded-error corrector. When $N_{\rm req}=0$ it returns the seed with continuation status `finite-trace`; when $N_s=0<N_{\rm req}$ it returns the seed with `continuation-budget-exhausted`, in both cases followed only by the finite finalization. These are partial correctness and conditional termination, not numerical success, a callback time bound, or global branch completeness.

There is also an error-aware predictor bound. In an admitted attempt write $z_*=z_k^*$, $\tau=\tau_k$, $\widehat t=\widehat t_k$, $t=t_k$, and $r=r_k$, with $\|\bar z-z_*\|_2\le r$ and $\|\widehat t-t\|_2\le e$. Suppose a convex open tube contains $z_p=\bar z+h\widehat t$, $p_*=z_*+ht$ and their segment, as well as the exact tangent-predictor segment from $z_*$ to $p_*$. Suppose on that tube $\|DF\|_{\rm op}\le D$ and $DF$ is $L$-Lipschitz. Then
$$\|G_k(z_p)\|_2=\|F(z_p)\|_2\le \frac{\sqrt n L}{2}h^2+D(r+he).$$
In particular the exact-seed, exact-tangent branch preserves the quadratic predictor-defect bound even though the section uses the previous orientation.

## Facts & Assumptions

**Given:** The algorithm inputs and soundness hypotheses, and, for termination, the stated finite-callback condition; for the last bound, the stated convex tube and derivative bounds.

[F1] [[alg-pseudo-arclength-continuation-with-certified-local-corrector]] fixes the previous section normal, candidate predictor, accepted/attempt counters, finite update loops, common single append, chart inclusion and all return/finalization tests.

[F2] [[lem-transverse-hyperplane-selects-unique-local-branch-point]] selects exactly one point on a two-sided unit-speed chart when its normal derivative is bounded below by $\kappa>0$ and its offset is in $[0,\kappa r_+]$.

[F3] [[thm-augmented-residual-contraction-certificate]] supplies exactly one augmented zero in the proposed ball and center error at most $\beta\rho_g/(1-q)$ under its explicit derivative/residual errors, inverse bound, Lipschitz bound and contraction/inclusion inequalities.

[F4] [[thm-simple-fold-lyapunov-schmidt-parameterization]] gives its local chart and normalized nonzero parameter curvature when all stated rank, regularity, complement and strict nondegeneracy hypotheses hold.

[F5] [[alg-finite-budget-newton-for-vector-residuals]] specifies its singular/domain/budget and residual-stop outputs; [[lem-finite-budget-newton-work-and-status]] proves its correction-call bound. Neither result makes a residual stop a root certificate.

[F6] [[lem-regular-curve-chart-and-pseudo-arclength-predictor-defect]] bounds $\|F(z_*+ht)\|_2$ by $\sqrt n Lh^2/2$ for the exact root and unit tangent on its admitted tube.

[F7] [[thm-mean-value-inequality-for-total-derivatives]]: on a convex open set, a derivative-operator-norm bound $D$ gives $\|F(u)-F(v)\|_2\le D\|u-v\|_2$.

[A1] Every returned bound used in an accepted seed, chart, root-ball or fold record is sound. Every callback in the conditional-termination claim returns in finite time; a callback may return failure.

## Proof

1.1 The valid seed is the base of the certified list by [F1]. In an attempted step, $\tau$ is unit and the root lies within distance $r$ of its current center. Thus $|\tau^T(\bar z-z_*)|\le r$. Writing $a=\tau^T\widehat t$, the actual offset is $d=\tau^T(z_p-z_*)=ha+\tau^T(\bar z-z_*)$. Hence $ha-r\le d\le ha+r$. The tests $ha>r$ and $ha+r\le\kappa r_+$ in [F1] put $0<d\le\kappa r_+$. With the whole chart angle inequality, [F2] gives a unique intersection and puts its chart parameter strictly forward of zero. [A1, F1, F2, given, algebra]

2.1 An append is permitted only after [F3] applies to that same augmented section and the whole ball is contained in the neighborhood where every zero of $F$ belongs to the supplied chart interval. Its certified augmented zero therefore lies on that chart and its section plane. By uniqueness from step 1.1 it is the selected point. [F3] supplies the recorded center error. This argument applies to exact and bounded-error candidate generators alike; their residual stops or exhausted budgets cannot replace the ball certificate. Induction over the common append block proves local soundness for the entire returned list and for each prefix on an early return. [A1, F1, F2, F3, F5, step 1.1, algebra, induction]

3.1 The accepted count increases exactly once per append and starts at zero. The procedure returns `finite-trace` precisely when it equals $N_{\rm req}$, so that status has the stated list length. Every other continuation return preserves the already certified list. At finalization a fold field can change to `certified` only after its record establishes the actual fold point, its neighborhood, and every hypothesis of [F4]; applying [F4] gives precisely the local chart and curvature conclusion. Unavailable evidence leaves `inconclusive`, and a fold request cannot turn an unsuccessful continuation candidate into a certified section root. [A1, F1, F4, step 2.1, algebra]

4.1 At each attempt the attempted counter increases before any callback and cannot exceed $N_s$. In the exact branch [F5] allows at most $N_c$ Newton updates and a single subsequent root-ball certificate request. In the bounded-error branch [F1] allows at most $N_c$ updates and $N_c+1$ certificate requests. All other checks in an attempt are finite computations or finitely many callbacks, and by [A1] they return in finite time. Finalization likewise has finitely many terminating callback requests and no unbounded search. Hence finitely many attempts and finalization terminate, regardless of whether any certificate succeeds. The initial tests in [F1] assign the stated statuses for $N_{\rm req}=0$ and $N_s=0<N_{\rm req}$ before querying continuation callbacks; a zero corrector budget still allows the specified certificate test but no update. [A1, F1, F5, step 3.1, given, algebra]

5.1 The exact tangent predictor $p_*=z_*+ht$ satisfies [F6], giving $\|F(p_*)\|_2\le\sqrt n Lh^2/2$. The actual predictor obeys $z_p-p_*=(\bar z-z_*)+h(\widehat t-t)$, so $\|z_p-p_*\|_2\le r+he$. Apply [F7] on the admitted convex open tube and add the exact predictor bound to obtain $\|F(z_p)\|_2\le D(r+he)+\sqrt n Lh^2/2$. The last coordinate $\tau^T(z_p-z_p)$ is zero irrespective of which previous unit orientation is used, so the augmented norm equals $\|F(z_p)\|_2$. This proves the final claim without setting seed or tangent errors to zero. [F1, F6, F7, given, algebra] ∎
