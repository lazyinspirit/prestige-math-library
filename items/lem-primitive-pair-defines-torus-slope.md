---
id: lem-primitive-pair-defines-torus-slope
kind: lemma
title: "Primitive pairs define unique unoriented slopes on a torus"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: []
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "William P. Thurston, The Geometry and Topology of Three-Manifolds"
      url: "https://library.slmath.org/nonmsri/gt3m/PDF/4.pdf"
      locator: "Chapter 4, §4.5, generalized Dehn surgery coefficients"
    - title: "Danny Calegari, Kleinian Groups"
      url: "https://math.uchicago.edu/~dannyc/courses/kleinian_groups_2015/kleinian_groups.pdf"
      locator: "§2.3.2, ideal torus cusp coordinates and primitive slopes, PDF pp.14–15"
    - title: "Benson Farb and Dan Margalit, A Primer on Mapping Class Groups, version 5.0 author draft"
      url: "https://pagine.dm.unipi.it/~a019210/Farb%20Magalit_Primer%20on%20Teichmuller%20theory.pdf"
      locator: "Chapter 1, §§1.2.4–1.2.6, Lemma 1.8 and Propositions 1.7 and 1.10, printed pp.31–38; torus classification Proposition 1.5, printed pp.27–28"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: pending
---

## Statement

Let $T$ be an oriented torus and let $([\mu],[\lambda])$ be an ordered basis of $H_1(T;\mathbb Z)$. An unoriented essential simple closed curve on $T$ has homology class $p[\mu]+q[\lambda]$ for a unique pair $(p,q)$ up to simultaneous sign, and that pair is primitive: $\gcd(p,q)=1$. Conversely, every primitive pair $(p,q)$ determines an essential simple closed curve, unique up to isotopy and simultaneous reversal of orientation.

## Statement references

[William P. Thurston, *The Geometry and Topology of Three-Manifolds*, Chapter 4, §4.5](https://library.slmath.org/nonmsri/gt3m/PDF/4.pdf)

[Danny Calegari, *Kleinian Groups*, §2.3.2](https://math.uchicago.edu/~dannyc/courses/kleinian_groups_2015/kleinian_groups.pdf)

[Benson Farb and Dan Margalit, *A Primer on Mapping Class Groups*, Chapter 1, Proposition 1.10](https://pagine.dm.unipi.it/~a019210/Farb%20Magalit_Primer%20on%20Teichmuller%20theory.pdf)

## Facts & Assumptions

**Given:** An oriented torus $T$ and an ordered integral basis $([\mu],[\lambda])$ of its first homology.

[A1] Identify $T$ with $\mathbb R^2/\mathbb Z^2$ so the coordinate loops represent $[\mu]$ and $[\lambda]$; the chosen basis fixes this coordinate convention.

[F1] **External input (bigon lift criterion).** If two transverse simple closed curves on a surface have a pair of lifts to the universal cover intersecting more than once, the curves form an embedded bigon. The innermost-disk construction makes its interior disjoint from the curves. This is the contrapositive of Lemma 1.8, including its embedded projection argument, in Farb–Margalit, *A Primer on Mapping Class Groups*, version 5.0, printed pp.32–33; Proposition 1.7 on p.31 is the bigon criterion. [Farb–Margalit](https://pagine.dm.unipi.it/~a019210/Farb%20Magalit_Primer%20on%20Teichmuller%20theory.pdf)

## Proof

1.1 Let $p,q\in\mathbb Z$ satisfy $\gcd(p,q)=1$. Bézout's identity gives $r,s\in\mathbb Z$ with $ps-qr=1$. The matrix with columns $(p,q)$ and $(r,s)$ lies in $\mathrm{SL}(2,\mathbb Z)$, so it induces a homeomorphism of $\mathbb R^2/\mathbb Z^2$. The image of the first coordinate circle is embedded, essential, and represents $p[\mu]+q[\lambda]$. Reversing its parameter negates both coefficients, so the unoriented curve is unchanged. [given, A1, construct, algebra]

1.2 If $\gamma$ is an essential simple closed curve on $T$, it is nonseparating; cutting along it gives an annulus. An arc joining the two annulus boundary circles closes to a simple curve $\delta$ meeting $\gamma$ once, so the algebraic intersection is $[\gamma]\cdot[\delta]=\pm1$. Writing $[\gamma]=p[\mu]+q[\lambda]$ and $[\delta]=a[\mu]+b[\lambda]$ gives $pb-qa=\pm1$ because the ordered basis has intersection form $\pm1$. Any common divisor of $p,q$ would divide $pb-qa$, so $\gcd(p,q)=1$. [given, A1, construct, algebra]

2.1 Suppose $\gamma_0,\gamma_1$ are essential simple closed curves whose primitive classes agree up to sign. Reverse one orientation if necessary so their classes agree, and isotope them to be transverse. Let $v\in\mathbb Z^2$ be their common primitive class in the coordinates of [A1]. If they intersect, choose lifts $\widetilde\gamma_0,\widetilde\gamma_1\subset\mathbb R^2$ through one lift $x$ of an intersection point. Each chosen lift is preserved by the same nonzero deck translation $T_v$, because its projected curve represents $v$. Hence both $x$ and $T_v(x)$ lie on this pair of lifts and are distinct. By [F1] the curves therefore form an embedded bigon in $T$ whose interior misses them. Isotoping one curve across this bigon removes exactly two intersections and creates none. The transverse intersection set is finite, so repetition terminates and makes the curves disjoint. Cutting $T$ along $\gamma_0$ gives an annulus, and the disjoint essential curve $\gamma_1$ is parallel to its core, so the two curves cobound a subannulus. Isotopy across that annulus carries $\gamma_0$ to $\gamma_1$. Thus the primitive class modulo simultaneous sign determines exactly one unoriented isotopy class. [given, A1, F1, step 1.1, step 1.2, construct] ∎

## Diagram

Each unit grid square is a fundamental domain for $\mathbb R^2/\mathbb Z^2$; the bold $2$-by-$1$ rectangle is a display window containing two such squares. The red segment joins $(0,0)$ to its exact lattice translate $(2,1)$, so its lattice translates project to one simple closed curve because $\gcd(2,1)=1$. The blue arrows mark the $\mu$ and $\lambda$ lattice directions. This picture illustrates one primitive pair; the proof establishes the claim for every pair.

```tikz
\begin{tikzpicture}[scale=0.9,>=stealth]
  \draw[step=1,gray!35,very thin] (-0.2,-0.2) grid (2.2,1.2);
  \draw[thick] (0,0) rectangle (2,1);
  \draw[->,blue,thick] (0.12,0.06) -- (0.92,0.06) node[midway,below] {$\mu$};
  \draw[->,blue,thick] (0.08,0.10) -- (0.08,0.88) node[midway,left] {$\lambda$};
  \draw[->,red,very thick] (0,0) -- (2,1);
  \node[red,above] at (1.15,0.65) {$2\mu+\lambda$};
  \node at (1,-0.32) {display window};
\end{tikzpicture}
```
## Sources

[Benson Farb and Dan Margalit, *A Primer on Mapping Class Groups*, Chapter 1, Propositions 1.7 and 1.10](https://pagine.dm.unipi.it/~a019210/Farb%20Magalit_Primer%20on%20Teichmuller%20theory.pdf)
