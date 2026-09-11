---
id: "thm-fibration-sequence-is-natural"
kind: "theorem"
title: "Fibration sequence is natural"
deps: ["thm-long-exact-sequence-of-homotopy-groups-of-a-fibration", "lem-the-fibration-connecting-map-is-independent-of-lift-and-representative", "prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant"]
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

Let $p:(E,e_0)\to(B,b_0)$ and $p':(E',e'_0)\to(B',b'_0)$ be Serre fibrations, and let based maps $u:E\to E'$, $v:B\to B'$ satisfy $p'u=vp$ strictly. Then $u$ restricts to $u_F:F\to F'$ and the induced maps commute with every arrow in the two fibration LESs, including the pointed-set tail. They also preserve the component actions: $u_{F*}(c\cdot\alpha)=u_{F*}(c)\cdot v_*(\alpha)$. No AC is needed.

## Facts & Assumptions

[F1] The fibration LES includes the component action defined by lifted path endpoints. [[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]

[F2] Connecting classes are independent of representative and lift. [[lem-the-fibration-connecting-map-is-independent-of-lift-and-representative]]

[F3] Based maps induce functorial homotopy and component maps. [[prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant]]

## Proof

**Given:** The two based fibrations and strictly commuting square of the statement.

1.1 If $e\in F$, then $p'u(e)=vp(e)=v(b_0)=b'_0$, so restriction defines the continuous based $u_F$. The identities $ui=i'u_F$ and $p'u=vp$ imply commutation of the inclusion and projection squares in all degrees by F3, including maps of component sets. [F3, given]

1.2 For a based cube $b$ in $B$ choose a lift $a$ constant at $e_0$ on its $J$ faces. Then $ua$ lifts $vb$ and is constant at $e'_0$ on those faces. On the distinguished face its restriction is $u_F$ composed with the restriction of $a$. F2 therefore gives $\partial_{p'}v_*[b]=u_{F*}\partial_p[b]$. In degree one this is equality of the components of the initial endpoints, so the same calculation covers that square. [F2, given]

1.3 If $a$ lifts a loop $\gamma$ beginning at $e\in F$, then $ua$ lifts $v\gamma$ beginning at $u_F(e)$ and ends at $u_F(a(1))$. The independence of component lifts in F1 therefore gives the action identity on every component, without selecting a compatible family of lifting functions. [F1, given]

2.1 Steps 1.1–1.3 establish all arrows and the action. Basepoints exclude empty based fibers but no connectedness or surjectivity is needed; components not meeting the image of $u_F$ cause no change in the formulas. For point spaces and constant cubes the equations remain identities; degree zero stays a pointed-set assertion. Every choice above is one representative or lift for one equality, hence no AC. [step 1.1, step 1.2, step 1.3] ∎
