# Controlled Born amplitude error: independent CC proof draft

Research-only author artifact for `physics-cm-qm-gr-79-2026-10-11`, 2026-10-11. Sole reviewer `/root/physics_spectral_repair_successor` owns production integration, mathematical acceptance, and the full old/current/alias consumer cone. No production, imported mathematics, mirror, readiness, plan, contract, or native transition has been written. Local derivation is offered for examination, not acceptance.

## Snapshot, history, and exact scope

Current carrier: `items/thm-nrqm-controlled-dynamics-controlled-born-amplitude-error.md`, raw SHA-256 `0e34df21d7bd31131f401788c75bafa6ad58b780f41f2855fc4cac5a0e8db6a1`. Adjacent `parallel-born-error-repair-evidence.json` binds all actual inputs. The history JSON was parsed directly: its reviewer is `/root/physics_quantum_consumers`, `repair_cycle: 1`, `maximum_cycles: 2`, `original35_frozen: true`, `independent_acceptance: false`; original `/root/qm_composites_supplier_repair` attribution and exhausted source35 budgets survive. It contains no Born-specific item repair entry. The Born readiness row is a historical metadata/prerequisite quote refresh with no new independent acceptance, and still lists the generic AC Hilbert–Schmidt supplier. Neither that row nor this draft resets history or creates an additional round.

The actual current generic kernel supplier explicitly assumes arbitrary Choice. Its declared dependency in this CC-only Born item is unnecessary: the concrete local Euclidean L²-kernel lemma proves the only required boundedness and compactness by finite rectangular products. Current Fredholm and stationary bodies have already replaced their generic kernel premise by the local CC route; their matching research drafts were read. Those suppliers' full prerequisite closures remain the reviewer's obligation. In the Born region q<1, even general Fredholm invertibility is independently supplied by the explicit Neumann construction below.

Retain real bounded generic V with support in B_R, every R>0, every k>0, arbitrary incident d∈S², outgoing Ω∈S², CC alone, q=||K_k||, and the normalization G_k=e^{ik|z|}/(4π|z|). No radial or rotation-invariance assumption is used. The original exact constants q/(1−q), ||V||∞|B_R|^(1/2)/(4π), and their correctly scaled counterparts are preserved.

Two formulation ambiguities must be made explicit during integration rather than treated as proved:

* The amplitude estimate (b) uses the condition q<1 from (a). A reading asserting it for q≥1 is impossible to obtain from this proof (and its denominator is undefined or negative). The replacement below states the inherited antecedent explicitly.
* For V_η=ηV, the phrase “same estimate with q replaced by |η|q” means applying the entire estimate to the new potential: its prefactor is ||V_η||∞=|η|||V||∞, and f_B is also computed with V_η. Keeping the old prefactor while scaling only q is not established. The replacement spells out the complete second-order coupling bound, not an omitted |η| factor. Real η preserves the original real-potential stationary model; the norm-series/integral estimate separately works for complex η as an algebraic extension, without asserting the real-potential flux conclusions for it.

## Proposed direct dependencies and retained normalization

Replace the unnecessary `thm-l-two-kernels-give-hilbert-schmidt-operators` dependency by `lem-nrqm-coulomb-ltwo-kernel-operators-bounded-and-compact`. Retain current stationary and Fredholm suppliers with their actual CC contracts. Add direct Cauchy–Schwarz and Tonelli/polar-integration dependencies if embedding the concrete kernel estimate rather than using it as quoted local context; reconcile exact IDs and levels in the owning manifests, never by editing imported suppliers. The proof below needs Hilbert completeness, bounded linear operator/operator norm definitions, the concrete local kernel lemma, and the exact stationary amplitude definition. It does not need arbitrary Hilbert bases, Hilbert–Schmidt norm identities, Zorn, a Banach Fredholm alternative, general operator-valued integration, or DC.

Let H=L²(B_R;C), e_d(x)=e^{ikd·x}, and

    (K_k v)(x)=∫_{B_R} e^{ik|x−y|}V(y)v(y)/(4π|x−y|) dy,
    u_d=(I+K_k)⁻¹e_d,
    f_k(Ω;d)=−(4π)⁻¹∫_{B_R}e^{-ikΩ·y}V(y)u_d(y)dy,
    f_B(Ω;d)=−(4π)⁻¹∫_{B_R}e^{ik(d−Ω)·y}V(y)dy.

These conventions are exactly the current stationary supplier's (b); no Fourier-transform normalization is introduced. Since |e_d|=1, ||e_d||₂=|B_R|^(1/2). The incident plane wave has not been normalized to unit L² norm on the ball. The stationary current supplier uses incident flux ħk/m, so its differential cross section is |f_k|²; these constants cancel in that ratio and are not new factors multiplying f_B. No empirical count-rate claim or angular symmetry follows here.

## Replacement mathematical Statement

Assume Countable Choice. Adopt the current generic stationary hypotheses and notation above, and put q=||K_k||.

(a) If q<1, then I+K_k has a two-sided bounded inverse and

    ||u_d−e_d||₂ ≤ [q/(1−q)]||e_d||₂.

(b) Under the same condition q<1, the original first Born amplitude above obeys, for every Ω,d∈S²,

    |f_k(Ω;d)−f_B(Ω;d)|
      ≤ [||V||∞|B_R|^(1/2)/(4π)] [q/(1−q)]||e_d||₂
      = [||V||∞|B_R|/(4π)] q/(1−q).

In particular the bound is uniform in Ω as asserted, and also in d.

(c) For every real η with |η|q<1, let V_η=ηV, K_{k,η}=ηK_k, u_{η,d}=(I+ηK_k)⁻¹e_d, and f_{k,η}, f_{B,η}=ηf_B be the corresponding exact and first Born amplitudes. Then

    ||u_{η,d}−e_d||₂ ≤ [|η|q/(1−|η|q)]||e_d||₂,
    sup_{Ω,d}|f_{k,η}(Ω;d)−ηf_B(Ω;d)|
      ≤ [|η|||V||∞|B_R|^(1/2)/(4π)]
          [|η|q/(1−|η|q)]||e_d||₂
      = [|η|²||V||∞|B_R|q/(4π(1−|η|q))].

No base restriction q<1 is needed in (c): q is finite, and |η|q<1 suffices. When q=0 all corresponding errors are zero. These are controlled weak-coupling estimates in the original operator norm, with the full direction dependence retained.

## Complete elementary proof

**Given:** the bounded real compact V, R,k>0, directions d,Ω, the concrete K_k, q=||K_k||, and the normalized amplitude formulas above; for scaling, η as in (c).

1.1 [Concrete kernel, boundedness, and CC scope] Zero-extend h_k(x,y)=1_{B_R}(x)1_{B_R}(y)e^{ik|x−y|}V(y)/(4π|x−y|) to R⁶, setting its diagonal values arbitrarily. Tonelli and polar integration give

    ||h_k||²_{L²(R⁶)}
      ≤ ||V||∞²|B_R|/(16π²) ∫_{|z|<2R}|z|⁻² dz
      = ||V||∞²|B_R|R/(2π).

The local CC kernel lemma, followed by restriction to B_R, yields a bounded compact K_k and finite q≤||h_k||₂. Its finite-rank approximants come from finite rational box sums on R⁶: every six-dimensional box is a product of two three-dimensional boxes, and restriction/zero-extension converts each such term into a finite product kernel on B_R. Their kernel-L² convergence implies operator-norm convergence. No arbitrary basis is selected. The explicit numerical upper bound q≤sqrt(2/3)R²||V||∞ is an optional sufficient-condition tool; it does not replace the theorem's actual hypothesis q<1. [given, construct, algebra]

1.2 [Explicit inverse without a hidden operator-completeness premise] Suppose q<1. For f∈H define S_N f=Σ_{n=0}^N(−K_k)^n f. Operator submultiplicativity gives, for M>N,

    ||(S_M−S_N)f||₂ ≤ [q^(N+1)/(1−q)]||f||₂.

Completeness of the specified H defines Sf as the unique limit. Limits preserve linearity, ||Sf||₂≤(1−q)⁻¹||f||₂, and ||S−S_N||≤q^(N+1)/(1−q). The finite geometric identity gives

    (I+K_k)S_N=S_N(I+K_k)=I−(−K_k)^(N+1).

Taking limits shows (I+K_k)S=S(I+K_k)=I. Thus S is the actual bounded inverse; it agrees with the stationary supplier's unique inverse. Setting f=e_d,

    u_d−e_d = Σ_{n=1}^∞(−K_k)^n e_d,
    ||u_d−e_d||₂ ≤ [q/(1−q)]||e_d||₂.

This proves (a). The current F1 has an erroneous extra minus sign before this tail; it does not change the norm bound but should be corrected in the production proof. The construction uses explicit powers and unique limits, not a sequence of arbitrary vector choices. [step 1.1, given, construct, algebra]

2.1 [Exact amplitude difference and uniform direction control] Both amplitude integrals are absolutely convergent: V is bounded, B_R has finite volume, and u_d,e_d∈H. Define the bounded linear functional

    L_Ω(v)=−(4π)⁻¹∫_{B_R}e^{-ikΩ·y}V(y)v(y)dy.

Cauchy–Schwarz gives, for every Ω,

    |L_Ω(v)| ≤ (4π)⁻¹||V||_{L²(B_R)}||v||₂
      ≤ [||V||∞|B_R|^(1/2)/(4π)]||v||₂.

The same bound holds simultaneously for all Ω, because its modulus-one exponential has no direction-dependent majorant. The exact identity f_k−f_B=L_Ω(u_d−e_d) and step 1.2 imply (b) with precisely its 1/(4π) and |B_R|^(1/2) factors. Since K_k is independent of d and ||e_d||₂=|B_R|^(1/2) for every incident direction, the final bound is uniform in both d and Ω. No angular scalar-channel reduction has occurred. [step 1.2, given, algebra]

3.1 [Full coupling scaling, including both factors of η] The kernel depends linearly on V, so K_{k,η}=ηK_k and q_η=||K_{k,η}||=|η|q. Under |η|q<1, repeat step 1.2 with this operator, even if q≥1. The amplitude functional also scales: L_{η,Ω}=ηL_Ω, while f_{B,η}=L_{η,Ω}(e_d)=ηf_B. Hence

    f_{k,η}−f_{B,η}=ηL_Ω(u_{η,d}−e_d).

Step 2.1 and the scaled vector bound give exactly the asserted |η|² remainder. The zero cases η=0 or q=0 follow directly from the same inverse and identities, with no division by q or η. For fixed q<∞ the small-coupling limit is therefore O(|η|²) uniformly in both directions, and all original quantitative Neumann/Born conclusions follow under their proper antecedents. [step 1.2, step 2.1, algebra] ∎

## Review disposition and remaining obligations

The local Neumann and amplitude estimates have no remaining mathematical gap once the concrete L² space/kernel and exact stationary amplitude formula are supplied. Compactness is retained by the actual local finite-product argument; the estimate itself only needs boundedness. CC is inherited from this local kernel construction and the declared stationary suppliers; no AC-strengthened contract is proposed. The negative sign error in old F1 is confirmed algebraically. The missing explicit q<1 antecedent in (b) and the incomplete scaling wording in (c) must not be silently interpreted as broader claims. They are identified here with complete intended formulas for the owning reviewer to adjudicate and propagate if the public Statement is clarified.

This author has not independently accepted the all-k stationary/Fredholm chain, its UCP/positive-eigenvalue prerequisites, or the full consumer cone. In the actual small-norm branch, the inverse and amplitude-error argument do not depend on the difficult all-k Fredholm proof, but the production dependency interface and interpretation still require the successor's supplier-before-consumer review. This draft cannot be used as a readiness receipt. No external full-text retrieval was performed, no general AC supplier was edited, and no format check is presented as proof acceptance.
