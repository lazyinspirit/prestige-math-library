---
id: lem-broken-trajectories-are-limits-of-ordinary-trajectories
kind: lemma
title: "Every broken trajectory is a limit of ordinary trajectories"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, def-broken-morse-trajectory, def-geometric-convergence-to-a-broken-morse-trajectory, thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point, def-morse-smale-pair, thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces, thm-euclidean-implicit-function-theorem, thm-euclidean-inverse-function-theorem, thm-fundamental-theorem-on-flows]
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
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology, Part I Ch. 3, complete author PDF"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 3 Sec. 3.2.b, printed p. 64 (Proposition 3.2.6: ordinary trajectories exist in every neighbourhood of a once-broken trajectory)"
    - title: "Udhav Fowdar, A Functional Analytic Approach to Morse Homology (UCL 4th-year project, 2016, supervised by C. Wendl), complete PDF"
      url: "https://www.mathematik.hu-berlin.de/~wendl/pub/Fowdar.pdf"
      locator: "Sec. 6, printed pp. 42-51 (Theorem 6.1 and Lemmas 6.5-6.6: the general gluing construction for any composable pair)"
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes), Lectures 17-19, complete combined PDF"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 18 Sec. 5.5 (gluing produces trajectories in every neighbourhood of a broken flow line)"
dependency_level: 2
---

## Statement

Assume the Axiom of Choice. Let $(f,X)$ be Morse--Smale on a closed manifold, with $X$ downward gradient-like in the normalized Morse-coordinate sense. Every neighbourhood of every broken trajectory $v\in\overline{\mathcal M}(p,q)$ contains an ordinary trajectory from $p$ to $q$. Thus $\mathcal M(p,q)$ is dense in $\overline{\mathcal M}(p,q)$.

## Facts & Assumptions

**Given:** AC, the stated pair and a broken trajectory $v$.

[A1] AC is retained as a common hypothesis; the finite-dimensional gluing argument below makes no additional choice ([[def-axiom-of-choice]]).

[F1] Broken trajectories are finite strings of nonconstant orbit classes ([[def-broken-morse-trajectory]]).

[F2] The height topology has neighbourhoods specified by entry and exit transversals at every critical point of the string, including its endpoints ([[def-geometric-convergence-to-a-broken-morse-trajectory]]).

[F3] Near a critical point of index $k$, $f=f(c)-|u|^2+|z|^2$ and the flow is $(u,z)\mapsto(e^{2t}u,e^{-2t}z)$ ([[thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point]]).

[F4] Morse--Smale transversality holds, and the unstable and stable manifolds have dimensions given by their indices ([[def-morse-smale-pair]], [[thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces]]).

[F5] A transverse finite-dimensional equation can be solved in a block with invertible derivative by the implicit-function theorem; for smooth equations the derivative formula bootstraps the solution to smoothness ([[thm-euclidean-implicit-function-theorem]], [[thm-euclidean-inverse-function-theorem]]).

## Proof

**Proof technique:** direct, using the passage map of Audin–Damian Lemma 3.2.12 and Propositions 3.2.10–11, printed pp. 66–69.

1.1 First let the string be $a\to c\to b$, with $k=\lambda(c)$. On $f=f(c)+\varepsilon$, write the incoming crossing as $(0,z_+)$. The slice of $W^u(a)$ is transverse to the stable sphere $S^+=\{u=0,\ |z|^2=\varepsilon\}$ by [F4]. Its projection to $u\in\mathbb R^k$ is therefore a submersion at $z_+$. By [F5], fixing its surplus local coordinates gives a $k$-disk $D$ of the form $(u,h(u))$, where $h(0)=z_+$ and $|h(u)|^2=\varepsilon+|u|^2$. Put $g(u)=h(u)/|h(u)|$. The crossing map to $f=f(c)-\varepsilon$, obtained by solving the flow in [F3], sends $(u,h(u))$ to $(|h(u)|u/|u|,|u|g(u))$ for $u\ne0$. In polar coordinates it extends smoothly to $H(\rho,\theta)=(\sqrt{\varepsilon+\rho^2}\,\theta,\rho g(\rho\theta)),\qquad \rho\ge0,\quad\theta\in S^{k-1}.$ At $\rho=0$ its radial derivative has nonzero stable part $g(0)$, independent of the angular derivatives; it is an embedding near each boundary point, with $\rho=|z|$ and $\theta=u/|u|$ recovering its parameters. Its boundary is the unstable sphere $S^-$. [A1, F3, F4, F5, given, construct, algebra]

2.1 At the outgoing crossing $(u_-,0)$ of $c\to b$, the slice of $W^s(b)$ has codimension $\lambda(b)$ in the exit level and is transverse to $S^-$ by [F4]. Local defining equations composed with $H$ thus have a surjective derivative in the angular variables at $(0,u_-/\sqrt\varepsilon)$. Choose an invertible block of $\lambda(b)$ angular coordinates and fix the others. By [F5] they can be solved as smooth functions of $\rho$ for all sufficiently small $\rho\ge0$, giving points $H(\rho,\theta(\rho))\in W^s(b)$. If $\lambda(b)=0$ there are no equations to solve. For $\rho>0$ these points come from $D\subset W^u(a)$ and hence give ordinary trajectories from $a$ to $b$. Their entry and exit points tend to $(0,z_+)$ and $(u_-,0)$; smooth finite-time flow dependence controls all other prescribed transversals. They therefore approach the given once-broken trajectory in [F2]. This proves once-broken gluing existence without asserting invertibility of a sliced Fredholm operator. [F2, F4, F5, step 1.1]

3.1 Induct on the number $r$ of components. For $r=1$, $v$ itself is ordinary. For $r>1$, approximate its first $r-1$ components by an ordinary trajectory $u$ so closely that $u\#v_r$ lies in a prescribed open neighbourhood $W$ of $v$; this is possible by the induction hypothesis and the finite transversal description in [F2]. Since $W$ is open and contains $u\#v_r$, step 2.1 gives an ordinary trajectory in $W$. Hence every neighbourhood of every finite string meets the ordinary stratum, proving density. [F1, F2, step 2.1] ∎
