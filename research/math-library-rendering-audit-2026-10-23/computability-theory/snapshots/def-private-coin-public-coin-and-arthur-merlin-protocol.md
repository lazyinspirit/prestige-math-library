---
id: def-private-coin-public-coin-and-arthur-merlin-protocol
kind: definition
title: "Private-coin, public-coin, and Arthur--Merlin protocols"
status: published
origin: session
deps: [def-ip]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Arora and Barak, §8.4"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Definition

An IP verifier is **private-coin** when it may keep random bits hidden. It is **public-coin** when, before each prover response, every random bit used since the preceding prover message is announced; the verifier's next message is therefore its public random string. An **Arthur--Merlin** protocol is a public-coin interactive protocol, conventionally with Arthur as verifier and Merlin as prover. These are subclasses/presentations of the protocols in [[def-ip]].
