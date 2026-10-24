---
id: def-oriented-slope-and-knot-dehn-filling
kind: definition
title: "Oriented slopes and knot Dehn filling"
status: published
origin: pipeline
dependency_level: 2
deps: [def-knot-exterior, def-knot-meridian-and-preferred-longitude,
       def-oriented-link-in-s-three-and-ambient-isotopy, def-countable-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Nikolai Saveliev, Lectures on the Topology of 3-Manifolds, 2nd revised edition, Lecture 2 §2.2"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/3mani.pdf"
      locator: "Lecture 1 §1.5, Theorem 1.5, pp. 23–24; Lecture 2 §2.2, p. 33"
    - title: "Peter S. Ozsváth, András I. Stipsicz, and Zoltán Szabó, Heegaard Floer homology, version 2025-12-15, §1.2.3"
      url: "https://web.math.princeton.edu/~petero/konyv9.pdf"
    - title: "Mohamed Elhamdadi, Mustafa Hajij, and Kyle Istvan, Framed Knots, arXiv:1910.10257v6, §§4–7"
      url: "https://arxiv.org/pdf/1910.10257v6"
---

## Definition

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$. Let $K$ be a smooth oriented knot in the oriented $3$-sphere, let $N(K)$ be a chosen closed tubular solid-torus neighborhood, let $E_K=\overline{S^3\setminus\operatorname{int}N(K)}$, and let $T_K=\partial E_K=\partial N(K)$. Let $\mu$ be the positive oriented meridian, meaning the boundary of a positive normal disk in $N(K)$, and let $\lambda$ be a preferred longitude, meaning a degree-one parallel of the core $K$ in $N(K)$ that is null-homologous in $E_K$. Assume that $[\mu],[\lambda]$ are an ordered basis of $H_1(T_K;\mathbb Z)$, with the boundary-orientation convention $\mu\cdot\lambda=-1$. A slope is the unoriented isotopy class of an essential simple closed curve on $T_K$ whose homology class is $p[\mu]+q[\lambda]$ for coprime integers $p,q$ not both zero; $(p,q)$ and $(-p,-q)$ represent the same slope. For a slope represented by $p[\mu]+q[\lambda]$, the Dehn filling $E_K(p/q)$ is obtained by gluing an oriented solid torus $D^2\times S^1$ to $E_K$ by an orientation-reversing boundary homeomorphism that sends $[\partial D^2\times\{1\}]$ to that slope; the filled orientation agrees with the fixed orientation on $E_K$. If $q\ne0$, the coefficient is written $p/q$; the meridional slope is $1/0$, and integer $n$-framed filling means slope $n[\mu]+[\lambda]$. The oriented homeomorphism type is independent of the gluing map once its meridian image is fixed.

## Definition references

[[def-oriented-link-in-s-three-and-ambient-isotopy|Smooth oriented knots and the ambient orientation]]

[[def-countable-choice|Countable-choice hypothesis for the chosen tubular data]]

[[def-knot-exterior|Chosen knot exterior and boundary orientation]]

[[def-knot-meridian-and-preferred-longitude|Positive meridian and degree-one preferred longitude]]

[Saveliev, Lecture 1 §1.5, Theorem 1.5, pp. 23–24; Lecture 2 §2.2, p. 33](https://poisson.phc.dm.unipi.it/~camponovo/libri/3mani.pdf)

[Ozsváth–Stipsicz–Szabó, §1.2.3, Dehn filling and surgery coefficients](https://web.math.princeton.edu/~petero/konyv9.pdf)

[Elhamdadi–Hajij–Istvan, §§4–7, meridians, preferred longitudes, and integer surgery](https://arxiv.org/pdf/1910.10257v6)

## Facts & Assumptions

**Given:** A marked oriented knot exterior $(E_K,T_K,\mu,\lambda)$ satisfying the hypotheses in Definition, and two orientation-reversing gluing maps with the same unoriented meridian slope.

[A1] $\mathrm{AC}_\omega$ is the stated axiom [[def-countable-choice]]. The marked data include the chosen exterior [[def-knot-exterior]], its boundary torus, and the meridian–preferred-longitude basis [[def-knot-meridian-and-preferred-longitude]]. The batch-57 definitions specify this interface; the basis is an explicit hypothesis here, not an assertion that those definitions prove its existence.

[F1] **External input.** Every essential simple closed curve on a torus has primitive homology class, and unoriented isotopy classes are in bijection with primitive homology classes modulo sign. Saveliev, *Lectures on the Topology of 3-Manifolds*, Lecture 2 §2.2, p. 33, states the corresponding one-to-one classification by reduced fractions.

[F2] **External input.** The map from isotopy classes of orientation-preserving homeomorphisms of $T^2$ to $\mathrm{SL}(2,\mathbb Z)$ given by the action on $H_1(T^2;\mathbb Z)$ is an isomorphism. Saveliev, Lecture 1 §1.5, Theorem 1.5, p. 24, states this result; its proof there cites Rolfsen, Theorem 2.D.4, for injectivity. We use the stated mapping-class classification, and do not claim to have read the cited Rolfsen proof.

## Proof

1.1 Since $\gcd(p,q)=1$, Bézout's identity gives integers $r,s$ with $ps-qr=1$. The integer matrix with columns $(p,q)$ and $(r,s)$ is unimodular, so its linear map on $\mathbb R^2$ descends to a torus homeomorphism. The image of a coordinate circle is embedded and has class $p[\mu]+q[\lambda]$; reversing its parameter changes both coefficients' signs and leaves the unoriented curve unchanged. With the product orientation on $V=D^2\times S^1$, the standard meridian–longitude basis on $\partial V$ has intersection $+1$. The matrix has determinant $+1$, whereas $\mu\cdot\lambda=-1$ on $T_K$, so the induced boundary map reverses orientation and gives the required gluing map. Thus every primitive pair defines a slope and an oriented filling. [given, A1, construct, algebra]

2.1 Let $C_0,C_1$ be essential simple closed curves whose primitive classes agree up to sign. Reverse one parameter if needed so their classes agree. By [F1], the curves are isotopic. Thus the unoriented slope depends only on the primitive class modulo simultaneous sign. [given, F1, step 1.1]

3.1 Let $V=D^2\times S^1$ and let $\phi_0,\phi_1:\partial V\to T_K$ be orientation-reversing gluing maps whose meridians map to the same slope. The transition map $g=\phi_0^{-1}\phi_1$ preserves boundary orientation and sends the meridian class to $\epsilon$ times itself for some $\epsilon\in\{1,-1\}$. Its matrix in the meridian–longitude basis is therefore $\begin{pmatrix}\epsilon&k\\0&\epsilon\end{pmatrix}$ for some $k\in\mathbb Z$. By [F2], $g$ is isotopic to $T^k$ if $\epsilon=1$, and to $T^{-k}R$ if $\epsilon=-1$, where $T(z,w)=(wz,w)$ and $R(z,w)=(\overline z,\overline w)$. These representatives extend over $V$: $T^j$ extends by $(z,w)\mapsto(w^jz,w)$, and $R$ extends by simultaneous complex conjugation. Both extensions preserve the orientation of $V$. To extend the isotopy from a representative $h$ to $g$, use a collar $\partial V\times[0,1]$ and the map $(x,s)\mapsto(I_{\rho(s)}(h^{-1}(x)),s)$, where $I_t$ is the isotopy from $h$ to $g$, $\rho(0)=1$, and $\rho$ is zero near the inner collar edge; composing this collar map with the extension of $h$ extends $g$ over $V$. Since $\phi_0\circ g=\phi_1$, gluing this extension to the identity on $E_K$ gives an oriented homeomorphism of the fillings. Therefore the oriented filling type depends only on the meridian slope. [given, F2, construct, algebra] ∎

## Diagram

The red segment below is one period of a lift of the primitive slope $2\mu+\lambda$ in the universal cover of a torus. Its endpoints differ by the exact deck translation $(2,1)$: two meridian periods and one longitude period. The grid is the integer lattice of the cover, and points differing by an integer lattice vector project to the same torus point. The picture illustrates the convention only; the proof above establishes the slope and gluing claims.

```tikz
\begin{tikzpicture}[scale=0.85,>=stealth]
  \draw[step=1,gray!35,very thin] (-0.2,-0.2) grid (2.2,1.2);
  \draw[thick] (0,0) rectangle (2,1);
  \draw[blue,->,thick] (0.12,0.06) -- (0.92,0.06) node[midway,below] {$\mu$};
  \draw[blue,->,thick] (0.08,0.10) -- (0.08,0.88) node[midway,left] {$\lambda$};
  \draw[red,->,very thick] (0,0) -- (2,1);
  \node[red,above] at (1.20,0.68) {$2\mu+\lambda$};
  \node at (1,-0.30) {universal-cover rectangle};
\end{tikzpicture}
```
