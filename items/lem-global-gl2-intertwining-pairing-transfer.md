---
id: lem-global-gl2-intertwining-pairing-transfer
kind: lemma
title: "Transfer of the Local GL2 Intertwining Constant to the Global Pairing"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - lem-generic-pgl2-principal-series-trilinear-pairing-uniqueness
  - lem-meromorphic-gl2-local-trilinear-intertwining-identity
  - lem-full-level-gl2-smoothed-triple-distributions-have-rapid-cusp-decay
  - lem-full-level-gl2-triple-pairing-is-independent-of-smoothing
  - lem-full-level-gl2-eisenstein-distribution-pairing-is-meromorphic
  - thm-identity-theorem-holomorphic-functions
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "S. D. Miller and W. Schmid, The Rankin–Selberg Method for Automorphic Distributions"
      url: "https://arxiv.org/pdf/math/0605783v1"
      locator: "§4, the transfer paragraph following (4.16), printed p.20; the proof here reconstructs transfer through generic uniqueness of classical smoothed-vector periods."
---

## Statement

Let $\tau_1\in(V^{-\infty}_{\lambda_1,\delta_1})^\Gamma$ and
$\tau_2\in(V^{-\infty}_{\lambda_2,\delta_2})^\Gamma$ be full-level GL2
automorphic distributions, with at least one cuspidal. Let $E_\nu$ be the
meromorphic full-level Eisenstein distribution and let $J_\nu$ be the
meromorphic intertwiner from parameter $-\nu$ to $\nu$ and parity zero.
Let $P_\nu$ denote the smoothing-independent triple pairing with third
parameter $\nu$. With $\eta\equiv\delta_1+\delta_2\pmod2$, and with
$G_0,G_1$ normalized as in the local intertwining formula, one has the
meromorphic identity
$$P_\nu(\tau_1,\tau_2,J_\nu E_{-\nu})=\frac{(-1)^\eta G_\eta((\lambda_1-\lambda_2-\nu+1)/2)G_\eta((-\lambda_1+\lambda_2-\nu+1)/2)}{G_0(1-\nu)}P_{-\nu}(\tau_1,\tau_2,E_{-\nu}).$$
The assertion includes arbitrary fixed $\lambda_1,\lambda_2$ by
meromorphic continuation in $\nu$. It does not assign finite values at
poles. No choice principle is assumed.

## Statement references

[[lem-full-level-gl2-eisenstein-distribution-pairing-is-meromorphic|the Eisenstein distribution and pairing]]

[[lem-meromorphic-gl2-local-trilinear-intertwining-identity|the local intertwiner and its exact constant]]

## Facts & Assumptions

**Given:** The two fixed automorphic distributions, the cuspidal input, and the meromorphic Eisenstein family.

[F1] [[lem-full-level-gl2-smoothed-triple-distributions-have-rapid-cusp-decay]] proves the compact-picture finite-order estimates and the repeated-unipotent-derivative cusp bound. The same action estimate applies to any fixed smooth test on the compact product, not just tests supported on its open orbit.

[F2] [[lem-full-level-gl2-triple-pairing-is-independent-of-smoothing]] defines the global pairing using any normalized smoothing function.

[F3] [[lem-generic-pgl2-principal-series-trilinear-pairing-uniqueness]] gives at most one continuous invariant trilinear functional away from its explicit countable affine parameter hyperplanes.

[F4] [[lem-meromorphic-gl2-local-trilinear-intertwining-identity]] supplies the nonzero open-orbit local kernel $K$, the continuous meromorphic intertwiner and its duality, and the exact local trilinear identity.

[F5] [[lem-full-level-gl2-eisenstein-distribution-pairing-is-meromorphic]] gives common finite-order estimates for the locally regularized Eisenstein family and meromorphic quotient integration through uniform cusp bounds.

[F6] [[thm-identity-theorem-holomorphic-functions]] extends a one-parameter meromorphic identity after clearing local poles.

## Proof

**Given:** The data in the Statement. Use smooth vectors $v_j$ in the dual principal-series parameters $-\lambda_1,-\lambda_2,-\nu$, respectively.

1.1 For a fixed full-level distribution $\sigma\in V^{-\infty}_{\nu,0}$, form its classical smoothed-vector period $A_\sigma(v_1,v_2,v_3)=\int_{\Gamma\backslash G}\prod_{j=1}^3\langle\tau_j,\pi_{-\lambda_j}(g)v_j\rangle\,dg$, where $\tau_3=\sigma$ and $\lambda_3=\nu$. The tensor test $v_1\otimes v_2\otimes v_3$ is smooth on the full compact product. The finite-order action bound in [F1] gives a common polynomial growth exponent for every right derivative of its matrix coefficient. The zero unipotent average in a cuspidal slot is also exactly the average proved in [F1]. Repeated differentiation as in [F1] therefore gives absolute convergence and a bound for $A_\sigma$ by a finite product of smooth-vector seminorms. Thus $A_\sigma$ is a continuous trilinear functional. Simultaneous translation of its three test vectors is the right change of variable $g\mapsto gb$ in an absolutely convergent quotient integral, so this functional is $G$-invariant. [F1, construct, algebra]

2.1 Outside a discrete set of $\nu$, [F3] applied to $(-\lambda_1,-\lambda_2,-\nu)$ and [F4] give $A_\sigma=c_\sigma K_{-\lambda_1,-\lambda_2,-\nu}$. Its scalar is $c_H P_\nu(\tau_1,\tau_2,\sigma)$, where $c_H\ne0$ is a fixed Haar-normalization constant, independent of the parameters and distributions. Indeed, take $v_1,v_2,v_3$ supported in three disjoint small projective intervals. Their product is supported in the open orbit, so the construction in [F1] identifies it with a compact smoothing function $\psi$ on $G$. The resulting diagonal smoothed function is exactly the product of matrix coefficients in step 1.1. Its Haar integral $\int_G\psi$ is the local kernel $K_{-\lambda_1,-\lambda_2,-\nu}(v_1,v_2,v_3)$: the open-orbit Haar density is $|x-y|^{-1}|y-z|^{-1}|z-x|^{-1}\,dx\,dy\,dz$, and dividing by the three principal-series section multipliers gives the kernel exponents in [F4] with all parameters negated. The proportionality between this open-orbit density and the chosen Haar measure is a fixed nonzero constant; call the corresponding ratio $c_H$. By [F2], $A_\sigma=c_H P_\nu(\tau_1,\tau_2,\sigma)K_{-\lambda_1,-\lambda_2,-\nu}$ on these tests. Some such product test has nonzero kernel value, since its smooth density on the open orbit is nowhere zero and sufficiently small supports keep its phase in an open half-plane. Therefore $c_\sigma=c_H P_\nu(\tau_1,\tau_2,\sigma)$, and uniqueness extends this equality to all smooth test vectors. [step 1.1, F1, F2, F3, F4, algebra]

3.1 Apply step 2.1 with $\sigma=J_\nu E_{-\nu}$. This is full-level invariant because the intertwiner commutes with $G$. By its duality in [F4], $\langle J_\nu E_{-\nu},\pi_{-\nu}(g)v_3\rangle=\langle E_{-\nu},\pi_\nu(g)J_\nu v_3\rangle$. Thus the classical period with this third distribution equals the classical period with $E_{-\nu}$ and third vector $J_\nu v_3$. Applying step 2.1 again, this time at parameter $-\nu$, and cancelling the same $c_H$ on both sides gives $P_\nu(\tau_1,\tau_2,J_\nu E_{-\nu})K_{-\lambda_1,-\lambda_2,-\nu}(v_1,v_2,v_3)=P_{-\nu}(\tau_1,\tau_2,E_{-\nu})K_{-\lambda_1,-\lambda_2,\nu}(v_1,v_2,J_\nu v_3)$. All equalities here are between absolutely convergent classical periods away from the discrete exceptional parameters. [step 1.1, step 2.1, F4, algebra]

4.1 Apply the local identity [F4] to the right side of step 3.1 with its first two parameters equal to $-\lambda_1,-\lambda_2$. Its two Gamma arguments are $( -\lambda_1+\lambda_2-\nu+1)/2$ and $(\lambda_1-\lambda_2-\nu+1)/2$, so their product is exactly the constant in the Statement. Choose the test vectors so that the common local kernel on the two sides is nonzero, as permitted by step 2.1, and cancel that scalar. This proves the stated identity for every $\nu$ outside the discrete exceptional and pole sets. [step 2.1, step 3.1, F4, algebra]

5.1 Both sides are meromorphic in $\nu$. For $E_{-\nu}$ this is [F5]. For $J_\nu E_{-\nu}$, clear finitely many poles on a fixed compact parameter set. The finite-order local Taylor formulas for $J_\nu$ in [F4] map the common finite-order distribution bounds of [F5] to common finite-order bounds; their weak pairings are holomorphic by transposition on smooth compact models. Applying the same uniform compact-picture action bound and cusp-tail argument as [F5] gives meromorphic quotient integration. The exception sets from [F3] and [F4], with $\lambda_1,\lambda_2$ fixed, are discrete because each defining affine equation has a nonzero coefficient of $\nu$. Thus [F6] extends the identity of step 4.1 to all $\nu$ meromorphically. No smoothing limit across a collision stratum has been taken: the only use of open-orbit tests identified one nonzero scalar, and the independently proved generic uniqueness handled all other tests. [step 4.1, F3, F4, F5, F6, algebra] ∎
