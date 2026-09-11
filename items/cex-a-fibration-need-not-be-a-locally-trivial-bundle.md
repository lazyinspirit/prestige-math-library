---
id: "cex-a-fibration-need-not-be-a-locally-trivial-bundle"
kind: "counterexample"
title: "A fibration need not be a locally trivial bundle"
deps: ["def-hurewicz-and-serre-fibrations", "def-locally-trivial-fiber-bundle", "thm-product-universal-property", "lem-algebra-of-continuous-real-maps-on-a-space"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "Chapter7 pp49–56; Chapter9 §3 p66 and §5 pp68–69"
    - title: "Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "§4.2 Theorem4.41 pp375–377; Hopf example pp377–378; §4.3 pp405–410"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement refuted

Every Hurewicz fibration is a locally trivial fiber bundle.

## Facts & Assumptions

[F1] Hurewicz HLP tests all initial maps and all compatible homotopies. [[def-hurewicz-and-serre-fibrations]]

[F2] Bundle charts identify every fiber in a chart domain with the same space. [[def-locally-trivial-fiber-bundle]]

[F3] A continuous coordinate pair gives a continuous product map, using only the choice-free characteristic-property clause. [[thm-product-universal-property]]

[F4] The minimum of two continuous real-valued functions is continuous. [[lem-algebra-of-continuous-real-maps-on-a-space]]

## Counterexample

**Given:** The closed triangle $E=\{(x,y)\in\mathbb R^2:0\le y\le x\le1\}$ and projection $p:E\to[0,1]$, $p(x,y)=x$.

1.1 For any ordinary parameter space $Z$, let the initial map be $f(z)=(a(z),b(z))\in E$ and let $h:Z\times I\to[0,1]$ satisfy $h(z,0)=a(z)$. Define $L(z,t)=(h(z,t),\min(b(z),h(z,t)))$. Its coordinates are continuous by F3–F4; the same coordinate check into the Euclidean subspace gives continuity into $E$. Indeed $0\le\min(b(z),h(z,t))\le h(z,t)\le1$, so its range is in $E$. [F3, F4]

1.2 The fiber over zero is the singleton $\{(0,0)\}$, while for every $x>0$ the fiber contains the distinct points $(x,0)$ and $(x,x)$ and is homeomorphic to $[0,x]$. Any relatively open neighbourhood of zero in $[0,1]$ contains some $x>0$. A chart over such a neighbourhood would, by F2, identify both fibers with one fixed fiber, forcing a singleton to be in bijection with a set containing two distinct points. This is impossible, so no bundle chart exists at zero. [F2]

2.1 At time zero, $b(z)\le a(z)$ implies $\min(b(z),a(z))=b(z)$, hence $L(z,0)=f(z)$. Also $pL=h$ at every time. This establishes F1 for every space $Z$, proving $p$ Hurewicz without any universal path-space theorem or choice. It also proves the CGWH test conclusion because the triangle and interval are ordinary compact Hausdorff spaces and their interval cylinders have the same topology. [F1, step 1.1]

3.1 Empty test spaces in step 1.1 give the empty lift; one-point tests give the same explicit path lift. If $a(z)=0$ then $b(z)=0$ and the lift is $(h(z,t),0)$, so emergence from the collapsed fiber is continuous. If $h=0$, the lift is $(0,0)$; if $h=a$ is constant in time, the formula fixes the original point. At $x=1$ and at both homotopy endpoints the same inequalities remain valid. Thus the singleton/interval change does not obstruct HLP but does obstruct local triviality, as claimed. [step 1.1, step 2.1, step 1.2] ∎
