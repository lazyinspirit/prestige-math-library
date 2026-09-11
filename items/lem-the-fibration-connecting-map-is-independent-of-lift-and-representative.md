---
id: "lem-the-fibration-connecting-map-is-independent-of-lift-and-representative"
kind: "lemma"
title: "The fibration connecting map is independent of lift and representative"
deps: ["def-fibration-connecting-homomorphism", "lem-relative-homotopy-operations-are-well-defined-in-their-valid-degrees", "prop-a-fibration-has-path-lifting-and-homotopy-lifting-relative-to-a-subspace"]
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
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For a based Serre fibration $p:(E,e_0)\to(B,b_0)$ and $F=p^{-1}(b_0)$, composition induces a bijection
$$p_*:\pi_n(E,F,e_0)\longrightarrow\pi_n(B,b_0)\qquad(n\ge1),$$
a group isomorphism for $n\ge2$. The connecting map defined by lifting and restricting the distinguished face is independent of both choices, pointed, and a homomorphism for $n\ge2$. No AC is required.

## Facts & Assumptions

[F1] The connecting construction lifts with all faces other than the last-coordinate-zero face fixed at $e_0$. [[def-fibration-connecting-homomorphism]]

[F2] Relative classes, boundary maps and pair maps are well-defined with their stated group ranges. [[lem-relative-homotopy-operations-are-well-defined-in-their-valid-degrees]]

[F3] Finite CW relative lifting holds without AC, with prescribed bottom and sides, and with reversed lifting time. [[prop-a-fibration-has-path-lifting-and-homotopy-lifting-relative-to-a-subspace]]

## Proof

**Given:** $n\ge1$ and the based Serre fibration of the statement; write a cube as $(u,t)\in I^{n-1}\times I$ and $J$ for all faces except $t=0$.

1.1 A relative representative $a$ has $pa=b_0$ on its entire boundary because $a(t=0)\subseteq F$ and $a|_J=e_0$. Relative homotopies similarly project to based homotopies. Thus composition defines the displayed pointed map; for $n\ge2$ it preserves coordinate-one concatenation by F2. Given an absolute representative $b$ in $B$, F1 constructs a lift constant on $J$, hence a relative representative with projection exactly $b$. This proves surjectivity in every degree, including $n=1$. [F1, F2]

1.2 Suppose relative representatives $a_0,a_1$ have based-homotopic projections, through $b(u,t,r)$, $r\in I$. Treat $(u,r)\in I^{n-1}\times I$ as the parameter disk and lift in reversed $t$-time. At $t=1$ prescribe $e_0$ everywhere. On the parameter boundary prescribe $a_0(u,t)$ at $r=0$, $a_1(u,t)$ at $r=1$, and $e_0$ on $u\in\partial I^{n-1}$. These prescriptions agree on intersections, and project to $b$ there because the base homotopy is based. F3 extends them over the full cylinder. At $t=0$ the lift lies in $F$, since $b(u,0,r)=b_0$; on every $J$ face it is $e_0$. It is therefore a relative homotopy from $a_0$ to $a_1$. For $n=1$ the parameter disk is just the $r$ interval and its two endpoints carry the two given paths, so the same argument proves injectivity of pointed sets. [F2, F3]

2.1 Steps 1.1–1.2 prove bijectivity. The connecting map equals the relative boundary map of F2 composed with the inverse bijection. Consequently both arbitrary lift choices and representative changes give the same output. For $n\ge2$ a bijective homomorphism has a homomorphic inverse, so this composite is a homomorphism. For $n=1$ it is a pointed map: the constant base representative admits the constant $e_0$ lift, whose initial component is distinguished. [F1, F2, step 1.1, step 1.2]

3.1 Specifying $e_0$ excludes empty fibers and empty total/base spaces; zero-dimensional boundary cubes when $n=1$ record points, not a nonexistent relative $\pi_0$. Constant cubes and point spaces are included by the same construction. All extension domains above are finite cubes with finite subcomplexes; F3 therefore uses only finitely many existential witnesses, and no AC. The equations at $t=0,1$ and $r=0,1$ establish every required endpoint condition. [F3, step 1.2, step 2.1] ∎
