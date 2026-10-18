---
id: lem-na-ultraweak-poisson-bounded-load-lifting
kind: lemma
title: A topology-free bounded lifting of every ultraweak Poisson load
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 7
proof_strategy: direct
provenance: {statement: ai-altered, proof: ai-altered}
deps: [def-na-ultraweak-poisson-dpg-formulation, lem-na-ultraweak-poisson-skeleton-quotients, lem-na-hdiv-is-hilbert-and-h0div-closed, lem-w-one-two-is-a-hilbert-space, lem-na-hdiv-weak-normal-trace, lem-na-homogeneous-dirichlet-poincare, thm-riesz-representation-for-hilbert-space, thm-lax-milgram, def-na-hdiv-space, def-countable-choice]
sources:
  references:
    - title: Gopalakrishnan and Qiu, An analysis of the practical DPG method
      url: https://wiki.math.ntnu.no/_media/tma4183/2017v/1107.4293.pdf
      locator: Sections 3.1–3.2 give the exact product graph norms, global trace quotient norms and signed form. The arbitrary-load lifting below is a local derivation, not the source's imported topology-dependent inf-sup proof.
---

## Statement

Assume Countable Choice and the real spaces and signs of [[def-na-ultraweak-poisson-dpg-formulation]], on every bounded connected Lipschitz polyhedron in dimension two or three and every finite conforming shape-regular simplicial mesh. Give $U$ the squared product norm of its two L2 factors and two global lift-infimum trace norms, and $V$ the declared full broken graph norm. Define $Bx=b(x,\cdot)$. There is a bounded linear $R:V'\to U$ with $BR=I_{V'}$ and $\|R\|\le C_*$, independent of the mesh. Choose any $C_P>0$ with $\|w\|_2\le C_P\|\nabla w\|_2$ on $H^1_0(\Omega)$, put $a=(C_P^2+2)^{1/2}$, and take
$$C_*^2=(1+a)^2+(1+C_Pa)^2+(1+C_P^2)a^2+(\sqrt2+a)^2+1.$$
No simple-connectivity or connected-boundary hypothesis is required.

## Facts & Assumptions

**Given:** Countable Choice, the stated domain and finite mesh, and arbitrary $F\in V'$.

[A1] Countable Choice is inherited by the Hilbert, Riesz and Lax–Milgram interfaces. ([[def-countable-choice]])

[F1] The five signed pairings, compatible global trace ranges and lift-infimum quotient norms are fixed by the formulation and quotient lemma. ([[def-na-ultraweak-poisson-dpg-formulation]], [[lem-na-ultraweak-poisson-skeleton-quotients]])

[F2] Real H1, its closed H1-zero subspace and H(div) are Hilbert, so their finite broken products are Hilbert. ([[lem-w-one-two-is-a-hilbert-space]], [[lem-na-hdiv-is-hilbert-and-h0div-closed]])

[F3] Riesz representation is linear and preserves the functional norm. ([[thm-riesz-representation-for-hilbert-space]])

[F4] The published abstract Lax–Milgram theorem solves bounded coercive real forms under Countable Choice. ([[thm-lax-milgram]])

[F5] Homogeneous Dirichlet Poincare holds on every bounded open domain; any containing coordinate-slab width is a permissible $C_P$. ([[lem-na-homogeneous-dirichlet-poincare]])

[F6] Weak normal traces are the cell Green functionals on $H^1(K)/H^1_0(K)$; an L2 vector with L2 distributional divergence belongs to H(div). ([[lem-na-hdiv-weak-normal-trace]], [[def-na-hdiv-space]])

## Proof

1.1 By [F2–F3], there is a unique $(\rho,z)\in V$ such that $F(\tau,v)=(\rho,\tau)+(\operatorname{div}_h\rho,\operatorname{div}_h\tau)+(z,v)+(\nabla_hz,\nabla_hv)$. Set $g=\rho$, $r=\operatorname{div}_h\rho$, $f=z$, $s=\nabla_hz$, regarded as global L2 classes using the finite partition. With $D=\|F\|_{V'}$, their squared L2 norms sum to $D^2$. [A1, F2, F3, given, algebra]

2.1 On the real Hilbert space $H^1_0(\Omega)$ the form $(\nabla w,\nabla\phi)$ is bounded with constant one and coercive in H1 norm with constant $(1+C_P^2)^{-1}$ by [F5]. The functional $(f,\phi)+(g+s,\nabla\phi)$ is bounded there, so [F4] gives a unique $w\in H^1_0(\Omega)$ with
$$(\nabla w,\nabla\phi)=(f,\phi)+(g+s,\nabla\phi)\quad(\phi\in H^1_0(\Omega)).$$
Testing with $w$ gives $\|\nabla w\|_2\le C_P\|f\|_2+\|g\|_2+\|s\|_2\le aD$, including the zero-gradient case, and $\|w\|_2\le C_PaD$. [A1, F2, F4, F5, step 1.1, algebra]

3.1 Set $\sigma=g-\nabla w$, $u=w-r$, and $q=g+s-\nabla w$. For compactly supported smooth $\phi$, step 2.1 gives $(q,\nabla\phi)=-(f,\phi)$; thus $\operatorname{div}q=f$ distributionally and $q\in H(\operatorname{div};\Omega)$. Set $\widehat u=\Gamma_0w$ and $\widehat\sigma_n=\Gamma_nq$, the elementwise quotient scalar traces and weak normal traces of these actual global fields. They belong to the exact global ranges of [F1], including homogeneous scalar boundary trace and conservative normal trace. Define $RF=(\sigma,u,\widehat u,\widehat\sigma_n)$. [F1, F6, step 1.1, step 2.1, construct, algebra]

4.1 Cell Green identities give $\langle\widehat u,\tau\cdot n\rangle=(\nabla w,\tau)+(w,\operatorname{div}_h\tau)$ and $\langle\widehat\sigma_n,v\rangle=(q,\nabla_hv)+(f,v)$. Substituting step 3.1 into the five terms of $b$ gives
$$b(RF,(\tau,v))=(g,\tau)+(r,\operatorname{div}_h\tau)+(s,\nabla_hv)+(f,v)=F(\tau,v).$$
Thus $BR=I_{V'}$. [F1, F6, step 1.1, step 3.1, algebra]

5.1 Steps 1.1–3.1 give $\|\sigma\|_2\le(1+a)D$, $\|u\|_2\le(1+C_Pa)D$, $\|\widehat u\|_{\widehat U}\le\|w\|_{H^1}\le\sqrt{1+C_P^2}aD$, and $\|\widehat\sigma_n\|_{\widehat Q_n}\le\|q\|_{H(\operatorname{div})}\le[(\sqrt2+a)^2+1]^{1/2}D$. The last inequality uses $\|g+s\|_2\le\sqrt2D$ and $\operatorname{div}q=f$. Summing squares proves $\|RF\|_U\le C_*D$. Riesz and the unique weak solve are linear, as are the volume formulas and trace maps, so $R$ is linear. Only the domain Poincare constant enters $C_*$; the proof uses neither topology nor mesh-size bounds. [F1, F3, F4, step 1.1, step 2.1, step 3.1, step 4.1, algebra] ∎
