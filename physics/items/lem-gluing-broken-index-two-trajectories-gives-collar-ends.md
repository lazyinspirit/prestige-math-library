---
id: lem-gluing-broken-index-two-trajectories-gives-collar-ends
kind: lemma
title: "Gluing once-broken index-two trajectories: collar ends"
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-geometric-convergence-to-a-broken-morse-trajectory, def-morse-smale-pair, prop-parametrized-morse-trajectory-space-is-a-manifold, thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point, lem-evaluation-on-a-regular-level-identifies-unparametrized-trajectories, thm-fundamental-theorem-on-flows, thm-euclidean-inverse-function-theorem, thm-euclidean-implicit-function-theorem, def-broken-morse-trajectory]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes), Lectures 17-19, complete combined PDF"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 18 Sec. 5.5 (gluing theorem and its consequences; PDF pp. 81-86)"
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology, Part I Ch. 3, complete author PDF"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 3 Proposition 3.2.8 and its proof, printed pp. 64-69 (collar embedding near a broken trajectory)"
    - title: "Udhav Fowdar, A Functional Analytic Approach to Morse Homology (UCL 4th-year project, 2016, supervised by C. Wendl), complete PDF"
      url: "https://www.mathematik.hu-berlin.de/~wendl/pub/Fowdar.pdf"
      locator: "Sec. 6, printed pp. 44-55 (pre-gluing, Theorems 6.1-6.2 and 6.8-6.9: smooth embedding and eventual containment)"
dependency_level: 2
---

## Statement

Assume the Axiom of Choice. Let $(f,X)$ be Morse--Smale on a closed manifold, with $X$ downward gradient-like in the normalized Morse-coordinate sense. Let $\lambda(p)=\lambda(r)+1=\lambda(q)+2$ and $(\gamma_1,\gamma_2)\in\mathcal M(p,r)\times\mathcal M(r,q)$. There is a homeomorphism $\psi:[0,\delta)\to U$ onto an open neighbourhood of this broken point in $\overline{\mathcal M}(p,q)$, with $\psi(0)=(\gamma_1,\gamma_2)$ and $\psi(s)\in\mathcal M(p,q)$ for $s>0$. Its restriction to $(0,\delta)$ is a smooth embedding. Every ordinary sequence converging to the broken point eventually lies in this collar. The parameter $s$ measures the small entry radius; the time spent near $r$ tends to infinity as $s\to0$.

## Facts & Assumptions

**Given:** AC, the stated pair and the once-broken point.

[A1] AC is retained as a common hypothesis; the collar construction is finite dimensional ([[def-axiom-of-choice]]).

[F1] The compactification topology is described by entry and exit transversals, including the endpoint charts, and ordinary convergence is convergence after shifts ([[def-geometric-convergence-to-a-broken-morse-trajectory]]).

[F2] Morse--Smale intersections have their index dimensions and are transverse ([[def-morse-smale-pair]], [[prop-parametrized-morse-trajectory-space-is-a-manifold]]).

[F3] Near $r$, the normalized flow is $(u,z)\mapsto(e^{2t}u,e^{-2t}z)$ ([[thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point]]).

[F4] The regular-level slices identify unparametrized trajectories; finite-time flow maps are smooth ([[lem-evaluation-on-a-regular-level-identifies-unparametrized-trajectories]], [[thm-fundamental-theorem-on-flows]]).

[F5] The finite-dimensional inverse and implicit-function theorems apply to invertible coordinate blocks; for smooth equations their derivative formulas bootstrap smoothness ([[thm-euclidean-inverse-function-theorem]], [[thm-euclidean-implicit-function-theorem]]).

## Proof

**Proof technique:** direct, following Audin–Damian Propositions 3.2.8 and 3.2.10–11 and Lemma 3.2.12, printed pp. 64–69.

1.1 Put $k=\lambda(r)$ and choose entry and exit levels $f(r)\pm\varepsilon$. The incoming slice of $W^u(p)$ has dimension $k$ and is transverse to the stable sphere $S^+$ at its crossing $(0,z_+)$. By [F5], a local sheet is a disk $D=\{(u,h(u))\}$ with $h(0)=z_+$ and $|h(u)|^2=\varepsilon+|u|^2$. The flow passage in [F3], with $g=h/|h|$, extends in polar coordinates to $H(s,\theta)=(\sqrt{\varepsilon+s^2}\,\theta,s g(s\theta)),\qquad (s,\theta)\in[0,\delta)\times S^{k-1}.$ This is a smooth embedded collar $Q$ of the unstable sphere $S^-$: its radial derivative at $s=0$ has nonzero stable component $g(0)$, the angular derivatives span the sphere tangent space, and $s=|z|$, $\theta=u/|u|$ recover its parameters. For $s>0$, $Q$ is the passage image of $D\setminus\{(0,z_+)\}$. [A1, F2, F3, F5, given, construct, algebra]

2.1 At the outgoing crossing $(u_-,0)$, the stable slice of $W^s(q)$ has codimension $k-1$ in the exit level and is transverse to the $(k-1)$-sphere $S^-$ by [F2]. In local sphere coordinates its defining equations composed with $H$ thus have invertible angular derivative. Apply [F5], extending the formula for $H$ to negative $s$ for this local calculation, to solve uniquely $\theta=\theta(s)$ near $(0,u_-/\sqrt\varepsilon)$. If $k=1$ there are no angular variables or equations and the assertion is immediate. The curve $\chi(s)=H(s,\theta(s))$ is a smooth embedded half-interval in $Q\cap W^s(q)$; for $s>0$ it lies in $W^u(p)$ as well. By [F4] it determines a smooth embedded family of ordinary orbit classes $\psi(s)$. The inverse passage gives entry points tending to $(0,z_+)$ and exit points tending to $(u_-,0)$, so [F1] makes the extension $\psi(0)=(\gamma_1,\gamma_2)$ continuous. [F1, F2, F4, F5, step 1.1]

3.1 Any trajectory sufficiently close to the broken point in the transversal neighbourhoods of [F1] has its entry point in $D$: closeness at the endpoint exit sphere of $p$ and smooth finite-time transport along the incoming component select precisely this local sheet of $W^u(p)$. Its exit point is therefore in $Q$, and closeness at the endpoint entry sphere of $q$ likewise selects the local sheet of $W^s(q)$. The uniqueness in step 2.1 forces that exit point to be $\chi(s)$. Shrinking the neighbourhood gives exactly one such half-interval; its inverse coordinate $s=|z|$ is continuous, including at the broken point. This proves the open-neighbourhood, homeomorphism and eventual-containment claims. Finally the passage time is $\tfrac12\log(\sqrt{\varepsilon+s^2}/s)$ by [F3], which diverges as $s\to0^+$. [F1, F3, F4, step 1.1, step 2.1] ∎
