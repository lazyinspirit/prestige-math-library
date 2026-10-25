# Correction: use five explicit manifest field patches only

The original V1 whole-manifest candidates were byte-identical to their archived originals and contained none of the intended additions. They are frozen as HISTORICAL NONAPPLY in `NONAPPLY-whole-manifest-candidates-v1.json`; preserve their bytes and do not install them. The earlier statement below that changes were mirrored in candidate manifests was incorrect. The 442-subject candidate policy pass checked SOURCE policy, not source/manifest mirror agreement. It remains truthful source-policy evidence only.

Use `manifest-field-patches-v2.json` (SHA256 `2a8ed58312b6418e31a2229f0120bdc10c3f3118234aa91582fe3fdfedb6340c`) instead: five exact item/page/pointer/parent-presence/before/after/source-candidate guards. The principal-connection item has no sources parent, so its patch adds the entire sources object only while that parent remains absent. Two batch8 items replace existing empty references arrays; two examples add generation mappings only while absent. After values were independently parsed/compared with the corresponding source candidates. Every other item field is preserved. No production manifest or source was changed.

Root must field-merge these five patches with independently reviewed Super/Invariant changes; the observed manifest hashes archive context and are not permission to replace whole files. Reject actual field/presence mismatches or require a genuine reviewed current guard transition. No science, source-stamp, native state, authority or readiness acceptance follows.

